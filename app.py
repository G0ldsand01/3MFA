from flask import Flask, render_template, request, redirect
import stripe
import os
from dotenv import load_dotenv
import random
import string
import trimesh  # For STL file analysis
import json

# Load environment variables
load_dotenv()
STRIPE_API_KEY = os.getenv('STRIPE_API_KEY')

# Configure Stripe
stripe.api_key = STRIPE_API_KEY
# Flask App
app = Flask(__name__)

# Define currencies and prices by country
currency_by_country = {
    "Canada": "CAD",
    "United States": "USD",
    "France": "EUR",
}

price_per_gram_by_currency = {
    "TPU": {"CAD": 0.13, "USD": 0.1, "EUR": 0.09},
    "PETG": {"CAD": 0.13, "USD": 0.1, "EUR": 0.09},
    "Carbon Fiber": {"CAD": 0.25, "USD": 0.3, "EUR": 0.15},
    "PLA": {"CAD": 0.13, "USD": 0.1, "EUR": 0.09},
    "ABS": {"CAD": 0.13, "USD": 0.1, "EUR": 0.09},
}

def generate_order_number(first_name, last_name):
    initials = first_name[0] + last_name[0]
    rand_number = ''.join(random.choices(string.digits, k=6))
    return initials + rand_number


def calculate_stl_dimensions(file_path):
    try:
        stl_mesh = trimesh.load_mesh(file_path)
        # Get the bounding box dimensions
        bounds = stl_mesh.bounds  # returns min and max values
        dimensions = bounds[1] - bounds[0]  # Calculate length, width, height
        volume = stl_mesh.volume  # Direct volume calculation
        
        return dimensions, volume / 1000  # Return dimensions and volume in cm³
    except MemoryError:
        raise ValueError("The STL file is too large to process.")
    except Exception as e:
        raise ValueError(f"Error calculating STL dimensions: {e}")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/order', methods=['POST'])
def order():
    try:
        # Form data
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        email = request.form['email']
        street_number = request.form['street_number']
        city = request.form['city']
        postal_code = request.form['postal_code']
        province = request.form['province']
        country = request.form['country']
        file = request.files['stl_file']
        material = request.form['material']
        quality = int(request.form['quality'])
        color = request.form['color']
        infill = int(request.form['infill'])
        scale = int(request.form['scale']) / 100

        order_number = generate_order_number(first_name, last_name)

        file_dir = f"./Orders/{order_number}-{first_name}-{last_name}"
        os.makedirs(file_dir, exist_ok=True)
        file_path = os.path.join(file_dir, file.filename)
        file.save(file_path)

        try:
            dimensions, base_volume = calculate_stl_dimensions(file_path)
        except ValueError as e:
            return f"Error processing STL file: {e}"

        volume = base_volume * (scale ** 3)  # Volume in cm³

        currency = currency_by_country.get(country, "USD")
        price_per_gram = price_per_gram_by_currency.get(material, {}).get(currency, 0.1)
        density = 1.25  # Density in g/cm³
        weight = volume * density * (infill / 100)
        cost = weight * price_per_gram
         # Determine if A1 mini is required
        needs_a1_mini = (dimensions[0] < 18 and dimensions[1] < 18 and dimensions[2] < 18 and quality > 0)
        


        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': currency,
                    'product_data': {
                        'name': f'3D Print - {material} ({color}) - {infill}% infill - {order_number}',
                    },
                    'unit_amount': int(cost * 100) + 125,
                },
                'quantity': 1,
            }],
            mode='payment',
            success_url=f'https://3mfa.vercel.app/success.html?order_number={order_number}',
            cancel_url=f'https://3mfa.vercel.app/cancel.html?order_number={order_number}',
        )
        payment_url = session.url

        with open(os.path.join(file_dir, f"{order_number}_user_details.txt"), 'w') as f:
            f.write(f"First Name: {first_name}\n")
            f.write(f"Last Name: {last_name}\n")
            f.write(f"Email: {email}\n")
            f.write(f"Address: {street_number}, {city}, {postal_code}, {province}, {country}\n")
            f.write(f"Material: {material}\n")
            f.write(f"Color: {color}\n")
            f.write(f"quality: {quality}\n")
            f.write(f"Infill Level: {infill}%\n")
            f.write(f"Scale: {scale * 100:.0f}%\n")
            f.write(f"Cost: {cost:.2f} {currency}\n")
            if needs_a1_mini:
                f.write(f"Can be Printed on A1 Mini: True\n")
            else:
                f.write(f"Can be Printed on A1 Mini: False\n")

        

        return redirect(payment_url)

    except Exception as e:
        return f"An error occurred while processing your order: {e}"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8001)

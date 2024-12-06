from flask import Flask, render_template, request, redirect, url_for
import stripe
import os
from dotenv import load_dotenv
import random
import string

# Charger les tokens depuis le fichier .env
load_dotenv()
STRIPE_API_KEY = os.getenv('STRIPE_API_KEY')

# Configurer Stripe
stripe.api_key = STRIPE_API_KEY

app = Flask(__name__)

# Définir les monnaies et les prix par pays
currency_by_country = {
    "Canada": "CAD",
    "United States": "USD",
    "France": "EUR",
    # Ajouter d'autres pays et leurs monnaies respectives ici
}

price_per_gram_by_currency = {
    "CAD": 0.13,
    "USD": 0.1,
    "EUR": 0.09,
    # Ajouter d'autres monnaies et leurs prix par gramme ici
}

# Fonction pour générer un numéro de commande unique
def generate_order_number(first_name, last_name):
    initials = first_name[0] + last_name[0]
    rand_number = ''.join(random.choices(string.digits, k=6))
    return initials + rand_number

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/order', methods=['POST'])
def order():
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
    color = request.form['color']
    infill = int(request.form['infill'])

    order_number = generate_order_number(first_name, last_name)
    
    # Sauvegarder le fichier STL
    file_path = f"./Orders/{order_number}-{first_name}-{last_name}/{file.filename}"
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    file.save(file_path)

    # Analyser le fichier STL pour obtenir le volume
    # (Cette partie nécessite des bibliothèques supplémentaires et une implémentation spécifique)
    volume = 100  # Exemple de volume en cm3

    # Calcul du coût de l'impression
    currency = currency_by_country.get(country, "USD")
    price_per_gram = price_per_gram_by_currency[currency]
    density = 1.25  # Densité du filament en g/cm3
    weight = volume * density * (infill / 100)
    cost = weight * price_per_gram

    try:
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': currency,
                    'product_data': {
                        'name': f'3D Print - {material} ({color}) - {infill}% infill - {volume} cm³ - {order_number}',
                    },
                    'unit_amount': int(cost * 100) + 100,
                },
                'quantity': 1,
            }],
            mode='payment',
            success_url=f'https://3mfa.vercel.app/success.html?order_number={order_number}',
            cancel_url=f'https://3mfa.vercel.app/cancel.html?order_number={order_number}',
        )
        payment_url = session.url
    except Exception as e:
        return f"Erreur lors de la création de la session de paiement : {str(e)}"

    # Sauvegarder les informations de la commande
    with open(f"./Orders/{order_number}-{first_name}-{last_name}/{order_number}_user_details.txt", 'w') as f:
        f.write(f"First Name: {first_name}\n")
        f.write(f"Last Name: {last_name}\n")
        f.write(f"Email: {email}\n")
        f.write(f"Address: {street_number}, {city}, {postal_code}, {province}, {country}\n")
        f.write(f"Material: {material}\n")
        f.write(f"Color: {color}\n")
        f.write(f"Infill Level: {infill}\n")
        f.write(f"Cost: {cost:.2f} {currency}\n")
    
    return redirect(payment_url)

if __name__ == '__main__':
    app.run(debug=True)

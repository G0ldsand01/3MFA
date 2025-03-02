import stripePackage from 'stripe';
import express from 'express';

const stripe = stripePackage('sk_test_51QKASfBAOa9shlrNAvzcpAwAl8FzuMg1x8GzA1f9VXTpAfzsbWw7WJIXIRkVhVRndoKZWZnBm6IfyBC65ESeqAOR00sycv0yU0');
const app = express();
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    const { cartItems } = req.body;
    const orderNumber = Math.floor(Math.random() * 1000000); // Génère un numéro aléatoire
    const lineItems = cartItems.map(item => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: item.name + ' Oder #' + item.orderNumber,
                description: item.description,
            },
            unit_amount: item.price * 100,
        },
        quantity: item.quantity,
    }));
    
        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: lineItems,
                mode: 'payment',
                
                success_url: 'https://3mfa.vercel.app/success.html?order_number=${orderNumber}',
                cancel_url: 'https://3mfa.vercel.app/cancel.html?order_number=${orderNumber}',

            });
    
            res.json({ id: session.id });
        } catch (error) {
            console.error("Erreur Stripe:", error);
            res.status(500).json({ error: error.message });
        }
    });


app.listen(3000, () => console.log('Server is running on port 3000'));
const express = require('express');
const stripe = require('stripe')('sk_test_51QKASfBAOa9shlrNAvzcpAwAl8FzuMg1x8GzA1f9VXTpAfzsbWw7WJIXIRkVhVRndoKZWZnBm6IfyBC65ESeqAOR00sycv0yU0');
const app = express();

app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    const { price, orderNumber, firstName, lastName, address, city, country, color, material, infill } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: '3D Printing Service',
                            description: `Order #${orderNumber}: ${color} ${material} ${infill}`,
                        },
                        unit_amount: price,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `https://3mfa.vercel.app/success.html?order_number=${orderNumber}`,
            cancel_url: `https://3mfa.vercel.app/cancel.html?order_number=${orderNumber}`,
        });

        res.json({ sessionId: session.id });
    } catch (error) {
        console.error('Error creating Stripe session:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

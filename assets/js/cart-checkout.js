const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51Qx9tsL7PH3OOG4xdK2i9exAywzUEbtCEdkFOCkIGDpZrQf2c1SHX9H515N9VEYOJK9MJTmRD2gW4WyjsCRj5pcC00LoY6DO7v');

app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { cart } = req.body;
  const lineItems = cart.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
        images: [item.image],
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://127.0.0.1:5500/',
    cancel_url: 'http://127.0.0.1:5500/',
  });

  res.json({ id: session.id });
});

app.listen(3001, () => console.log('Server running on port 3001'));
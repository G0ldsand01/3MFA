const express = require("express");
const stripe = require("stripe")("sk_test_51Qx9tsL7PH3OOG4xdK2i9exAywzUEbtCEdkFOCkIGDpZrQf2c1SHX9H515N9VEYOJK9MJTmRD2gW4WyjsCRj5pcC00LoY6DO7v"); // Use your Stripe secret key here
const app = express();
app.use(express.json());

app.post("/get-past-orders", async (req, res) => {
  const { uid } = req.body;
  
  try {
    // Fetch past payments (you will need to store user-specific payment history)
    const charges = await stripe.charges.list({
      customer: uid,
      limit: 5, // or however many you want
    });

    res.json(charges.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));

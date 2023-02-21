import Stripe from "stripe";

// This is your test secret API key.
const stripe =new Stripe('sk_test_51MNjItANEHdq6jhMobVaenrB8XCZzzcrdUXlWtyIm37wXMBuLUgni42TLHhOJ0crPhiCz5Bma8EzcrtGZ10vp8CE00sVZA8NQg');


/* app.use(express.static("public"));
app.use(express.json()); */
const priceTotalrounded =(totalPrice)=>{
    let a = totalPrice * 100;
    console.log(Math.round(a))
    return Math.round(a)
}

const paymentController =  async (req, res) => {
  
  const {totalPrice,Products}= req.body;




  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: priceTotalrounded(totalPrice),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });

  /* res.send({message:"no hay productos seleccionados", isError:true}) */
}


export default paymentController;
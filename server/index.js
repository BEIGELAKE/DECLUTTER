import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { auth } from 'express-oauth2-jwt-bearer';
import Stripe from 'stripe';

const app = express();
const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER,
});

app.use(cors());
app.use(express.json());

// Products
app.get('/api/products', async (req, res) => {
  const products = await prisma.product.findMany({
    include: { seller: true },
  });
  res.json(products);
});

app.post('/api/products', checkJwt, async (req, res) => {
  const { title, description, price, category, condition, images } = req.body;
  const product = await prisma.product.create({
    data: {
      title,
      description,
      price,
      category,
      condition,
      images,
      sellerId: req.auth.sub,
    },
  });
  res.json(product);
});

// Cart & Checkout
app.post('/api/checkout', checkJwt, async (req, res) => {
  const { items } = req.body;
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
          images: item.images,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });

  res.json({ url: session.url });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
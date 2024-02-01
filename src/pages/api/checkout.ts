import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { line_items } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!line_items || line_items.length <= 0) {
    return res.status(400).json({ error: 'Cart is empty.' });
  }

  const successUrl = `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_PUBLIC_URL}/`;

  const keys = Object.keys(line_items);

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: keys.map(item => ({
      price: line_items[item].defaultPriceId,
      quantity: line_items[item].quantity
    }))
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
    sessionId: checkoutSession.id
  })
}
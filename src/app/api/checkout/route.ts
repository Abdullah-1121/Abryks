
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY!)

export  async function POST(req: NextRequest, res: NextApiResponse) {
  
    try {
      // console.log('Request received:', req.json);
      
      const { items } = await req.json();
      // console.log('items are : ')
      // console.log(items)

      // Check if items exist and are in the correct format
      if (!items || !Array.isArray(items)) {
        return NextResponse.json({error:'Invalid format'},{status:400})
      }
      const lineItems = items.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
          },
          unit_amount: Math.round(item.price * 100), // Stripe expects the amount in cents
        },
        quantity: item.quantity,
      }));

      // Create Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card' ],
         line_items: lineItems,
        //items.map((item) => ({
        //   price_data: {
        //     currency: 'usd',
        //     product_data: {
        //       name: item.title,
        //     },
        //     unit_amount: item.price * 100, // Stripe expects the amount in cents
        //   },
        //   quantity: item.quantity,
        // })),
        mode: 'payment',
        success_url: `${req.nextUrl.origin}/?success=true`,
        cancel_url: `${req.nextUrl.origin}/?canceled=true`,
      });
      
      // console.log('Session created:', session);

      return NextResponse.json({ sessionId: session.id }, { status: 200 });
    } catch (err:any) {
      return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
    }
  
}
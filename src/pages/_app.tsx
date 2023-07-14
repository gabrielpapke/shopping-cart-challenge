import type { AppProps } from 'next/app'
import { CartProvider, useShoppingCart } from 'use-shopping-cart';

import { globalStyles } from '../styles/global';
import { Container } from '../styles/pages/app';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';


globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <CartProvider
        mode="payment"
        shouldPersist={true}
        cartMode="client-only"
        stripe={process.env.STRIPE_PUBLIC_KEY}
        currency="BRL"
        successUrl={`${process.env.NEXT_PUBLIC_URL}/success`}
        cancelUrl={`${process.env.NEXT_PUBLIC_URL}/`}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>

      </CartProvider >
    </Container>
  )
}
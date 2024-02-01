import { GetServerSideProps } from "next";
import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";

import { ImageContainer, ImagesList, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  costumerName: string;
  products: {
    id: string;
    name: string;
    imageUrl: string;
  }[]
}

export default function Success({ costumerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />

      </Head>

      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImagesList>
          {products.map(product => (
            <ImageContainer key={product.id}>
              <Image src={product.imageUrl} width={120} height={110} alt="" title={product.name} />
            </ImageContainer>
          ))}

        </ImagesList>

        <p>
          Uhuul <strong>{costumerName}</strong>, seu pedido já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const costumerName = session?.customer_details?.name;
  const products = session?.line_items?.data as Stripe.LineItem[];

  return {
    props: {
      costumerName,
      products: products.map((product: Stripe.LineItem) => ({
        id: product.id,
        name: product.description,
        imageUrl: (product?.price?.product as Stripe.Product).images[0]
      }))
    }
  }
}
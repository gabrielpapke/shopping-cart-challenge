import { GetStaticPaths, GetStaticProps } from "next"
import Head from 'next/head'
import Image from "next/image";
import axios from "axios";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { useState } from "react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { Product as CartProductProps } from "use-shopping-cart/core";

interface ProductProps {
  product: CartProductProps
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  const { addItem } = useShoppingCart()

  const price = formatCurrencyString({
    value: product.price,
    currency: 'BRL',
    language: 'pt-BR'
  })
  async function handleBuyButton(product: CartProductProps) {
    try {


      addItem(product)

    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{price}</span>

          <p>{product.description}</p>

          <button disabled={isCreatingCheckoutSession} onClick={() => handleBuyButton(product)}>
            Adicionar ao carrinho
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_OFbtUz2YLztoM6' } }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params?.id;

  if (!productId) {
    return {
      props: { product: null }
    }
  }

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price;

  console.log('price', price)
  console.log('price default', product.default_price)

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        price: price.unit_amount,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1 hours
  }
}
import { CartEntry } from "use-shopping-cart/core";
import {
  ItemContainer,
  ImageContainer,
  ItemInfo
} from "./styles";
import Stripe from "stripe";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import Image from "next/image";

interface CartItemProps {
  product: CartEntry
}

export function CartItem({ product }: CartItemProps) {
  const { removeItem } = useShoppingCart()
  return (
    <ItemContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt="" width={95} height={95} />
      </ImageContainer>

      <ItemInfo>
        <h3>{product.name}</h3>
        <div>
          <span>Qtd: {product.quantity}</span>
          <strong>{formatCurrencyString({
            value: product.price,
            currency: 'BRL',
            language: 'pt-BR'
          })}</strong>
        </div>
        <button onClick={() => removeItem(product.id)}>Remover</button>
      </ItemInfo>
    </ItemContainer>
  )
}
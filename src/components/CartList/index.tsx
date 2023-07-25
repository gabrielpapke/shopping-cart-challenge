import { useShoppingCart } from "use-shopping-cart";

import { CartItem } from "../CartItem";

import {
  CartListContainer,
} from "./styles";

export function CartList() {
  const { cartDetails } = useShoppingCart()
  const productsIds = Object.keys(cartDetails as {});
  console.log(cartDetails)
  return (
    cartDetails && <CartListContainer>
      {productsIds.map(productId =>
        <CartItem key={productId} product={cartDetails[productId]} />
      )}

    </CartListContainer>
  )
}
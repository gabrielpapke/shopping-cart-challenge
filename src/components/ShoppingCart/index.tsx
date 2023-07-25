import Image from "next/image";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { CartList } from "../CartList";
import { ShoppingCartContainer, CartFooter, EmptyCart } from "./styles";

import closeIcon from "../../assets/close-icon.svg"

export function ShoppingCart() {
  const { handleCartClick, cartCount, totalPrice } = useShoppingCart()
  return (
    <ShoppingCartContainer>
      <Image className="close" src={closeIcon} alt="Fechar" onClick={() => handleCartClick()} />

      <h2>Sacola de Compras</h2>

      {cartCount ? <>
        <CartList />

        <CartFooter>
          <table className="totals">
            <tbody>
              <tr>
                <td>Quantidade</td>
                <td align="right">{cartCount > 1 ? `${cartCount} itens` : '1 item'} </td>
              </tr>

              <tr>
                <td>Valor total</td>
                <td align="right">{formatCurrencyString({
                  value: totalPrice || 0,
                  currency: 'BRL',
                  language: 'pt-BR'
                })}</td>
              </tr>
            </tbody>
          </table>

          <button>Finalizar compra</button>
        </CartFooter>

      </> : <EmptyCart>
        Carrinho Vazio
      </EmptyCart>}
    </ShoppingCartContainer>
  )
}
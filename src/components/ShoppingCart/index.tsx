import { MouseEvent, useState } from "react";
import Image from "next/image";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { CartList } from "../CartList";
import { ShoppingCartContainer, CartFooter, EmptyCart } from "./styles";

import closeIcon from "../../assets/close-icon.svg"
import axios from "axios";

export function ShoppingCart() {
  const { handleCartClick, cartCount, totalPrice, redirectToCheckout, cartDetails, clearCart } = useShoppingCart()
  const [status, setStatus] = useState('')

  async function handleClick(event: MouseEvent<HTMLElement>) {
    event.preventDefault()

    if (cartCount !== undefined && cartCount > 0) {
      setStatus('idle')

      try {

        const response = await axios.post('/api/checkout', {
          line_items: cartDetails
        })

        const { sessionId } = response.data;
        handleCartClick();
        clearCart()

        const result = await redirectToCheckout(sessionId)

        if (result?.error) {
          console.error(result)
          setStatus('redirect-error')
        }

      } catch (error) {
        console.error(error)
        setStatus('redirect-error')
      }
    } else {
      setStatus('missing-items')
    }
  }
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

          <button onClick={handleClick}>
            {status === 'idle' ? 'Redirecionando...' : 'Finalizar compra'}
          </button>
        </CartFooter>

      </> : <EmptyCart>
        Carrinho Vazio
      </EmptyCart>}
    </ShoppingCartContainer>
  )
}
import { useShoppingCart } from "use-shopping-cart"
import { ShoppingCart } from "../ShoppingCart"
import { Header } from "../Header"
import { Content } from "./styles"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { shouldDisplayCart } = useShoppingCart()

  return (
    <>
      <Header />
      {shouldDisplayCart && <ShoppingCart />}

      <Content>{children}</Content>
    </>
  )
}
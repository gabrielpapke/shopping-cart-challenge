import { HeaderContainer, Counter } from './styles';
import Image from 'next/image';
import logoImg from "../../assets/logo.svg"
import cartIcon from "../../assets/cart-icon.svg"
import { useShoppingCart } from 'use-shopping-cart';

export function Header() {
  const { handleCartClick, cartCount } = useShoppingCart()

  return <HeaderContainer>
    <Image src={logoImg} alt="" />

    <Counter onClick={() => handleCartClick()}>
      <Image src={cartIcon} alt='' />

      {cartCount && <span>{cartCount}</span>}
    </Counter>
  </HeaderContainer>
}


import { HeaderContainer, Counter } from './styles';
import Image from 'next/image';
import Link from 'next/link';
import logoImg from "../../assets/logo.svg"
import cartIcon from "../../assets/cart-icon.svg"
import { useShoppingCart } from 'use-shopping-cart';

export function Header() {
  const { handleCartClick, cartCount } = useShoppingCart()

  return <HeaderContainer>
    <Link href="/">
      <Image src={logoImg} alt="" />
    </Link>

    <Counter onClick={() => handleCartClick()}>
      <Image src={cartIcon} alt='' />

      {!!cartCount && <span>{cartCount}</span>}
    </Counter>
  </HeaderContainer>
}


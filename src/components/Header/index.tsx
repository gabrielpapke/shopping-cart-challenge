import { HeaderContainer } from './styles';
import Image from 'next/image';
import logoImg from "../../assets/logo.svg"
import { useShoppingCart } from 'use-shopping-cart';

export function Header() {
  const { handleCartClick } = useShoppingCart()

  return <HeaderContainer>
    <Image src={logoImg} alt="" onClick={() => handleCartClick()} />
  </HeaderContainer>
}


import { styled } from "../../styles";

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
})

export const Counter = styled('span', {
  background: '$gray800',
  padding: '0.75rem',
  cursor: 'pointer',
  color: '$white',
  position: 'relative',
  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  span: {
    border: '3px solid $gray900',
    fontWeight: 'bold',
    position: 'absolute',
    right: -7,
    top: -7,
    fontSize: '0.875rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: '$green500',
    width: 'calc(1.5rem + 3px)',
    height: 'calc(1.5rem + 3px)',
  }

})
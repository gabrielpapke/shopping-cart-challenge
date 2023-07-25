import { styled } from '../../styles'

export const ShoppingCartContainer = styled('aside', {
  background: '$gray800',
  position: 'fixed',
  maxWidth: '30rem',
  width: '100%',
  padding: '4.5rem 3rem 3rem',
  right: 0,
  top: 0,
  height: '100vh',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 10,

  '.close': {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    cursor: 'pointer',
  },

  'h2': {
    fontSize: '1.25rem',
    color: '$gray100',
    fontWeight: '700',
    paddingBottom: '2rem'
  }
})

export const CartFooter = styled('footer', {
  marginTop: 'auto',
  '.totals': {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0 0.5rem',
    paddingTop: '2rem',

    'tr:last-of-type': {
      fontWeight: '700',
      fontSize: '1.125rem'
    }
  },

  button: {
    marginTop: '3rem',
    backgroundColor: '$green500',
    border: 0,
    width: '100%',
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    }
  },
})

export const EmptyCart = styled('div', {
  margin: 'auto'
})



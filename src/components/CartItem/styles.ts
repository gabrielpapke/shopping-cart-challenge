import { styled } from '../../styles'

export const ItemContainer = styled('li', {
  display: 'grid',
  gridTemplateColumns: '95px 1fr',
  gap: '1.5rem',

  '& + li': {
    marginTop: '1.5rem',
  }

})

export const ImageContainer = styled('div', {
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  overflow: 'hidden',
  width: 95,
  height: 95,

  img: {
    objectFit: 'cover'
  }
});

export const ItemInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  h3: {
    fontWeight: 'normal',
    fontSize: '1rem',
    marginBottom: '0.2rem'
  },
  div: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    fontSize: '1rem',
    margin: '0.2rem 0 '
  },
  button: {
    marginTop: 'auto',
    background: 'transparent',
    border: 'none',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: 'pointer',
    color: '$green500',

    '&:hover': {
      color: '$green300'
    }
  }
});

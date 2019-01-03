import React, { useContext } from 'react'
import styled from '@emotion/styled'

import StoreContext from '../storeContext'
import EmptyCart from './emptyCart'
import { colors, button, dropdown } from '../../../utils/styles'

const OpenCart = styled.div`
  ${dropdown.container};
  width: 280px;
`

const Heading = styled.h4`
  ${dropdown.heading};
`

const Divider = styled.div`
  ${dropdown.divider};
`

const CloseCartButton = styled.button`
  ${button.link};
  border-bottom: 0;
  color: ${colors.brandLighter};
  float: right;
  height: 20px;
  text-align: center;
  width: 20px;
  font-size: 1rem;
`

export default () => {
  const { checkout, isCartOpen, dispatch } = useContext(StoreContext)

  return (
    isCartOpen && (
      <OpenCart>
        <Heading>
          Your Cart
          <CloseCartButton onClick={() => dispatch({ type: 'toggleCart' })}>
            &times;
          </CloseCartButton>
        </Heading>
        <Divider />
        {checkout.lineItems.length > 0 ? <></>
          : <EmptyCart />
        }
      </OpenCart>
    )
  )
}

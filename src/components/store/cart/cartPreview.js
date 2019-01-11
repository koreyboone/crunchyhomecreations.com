import React, { useContext, useState } from 'react'
import styled from '@emotion/styled'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import StoreContext from '../storeContext'
import EmptyCart from './emptyCart'
import ItemList from './itemList'
import { colors, button, dropdown, spacing } from '../../../utils/styles'
import { Text } from '../../shared/typography'

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

const Checkout = styled(OutboundLink)`
  ${button.default};
  ${button.big};
  ${button.blue};
`

const CostBlock = styled.div`
  font-size: 0.875rem;
  margin: ${spacing.sm}px 0;
  position: relative;
  text-align: right;

  ::before {
    background-color: ${colors.lightest}dd;
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    opacity: ${props => (props.isLoading ? 1 : 0)};
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.5s ease;
    z-index: 2;
  }
`

const PriceBox = styled.span`
  display: inline-block;
  width: 75px;
`

const CostDetails = styled.p`
  margin: 0;
`

const CostTotal = styled.p`
  color: ${colors.brandPrimary};
  font-weight: bold;
  margin: 0;
`

const CurrencyText = styled(Text)`
  color: ${colors.textLight};
  font-size: 0.75rem;
  text-align: center;
`

const ContinueShopping = styled.p`
  color: ${colors.brandLighter};
  font-size: 0.875rem;
  text-align: center;
`

const ContinueShoppingLink = styled.button`
  ${button.link};
`

const CloseCartButton = styled.button`
  ${button.link};
  /* stylelint-disable */
  border-bottom: 0;
  /* stylelint-enable */
  color: ${colors.brandLighter};
  float: right;
  font-size: 1rem;
  height: 20px;
  text-align: center;
  width: 20px;
`

export default () => {
  const { checkout, isCartOpen, dispatch } = useContext(StoreContext)
  const [isLoading, setIsLoading] = useState(false)

  const toggleCart = () => dispatch({ type: 'toggleCart' })

  return (
    isCartOpen && (
      <OpenCart>
        <Heading>
          Your Cart
          <CloseCartButton onClick={toggleCart}>&times;</CloseCartButton>
        </Heading>
        <Divider />
        {checkout.lineItems.length > 0 ? (
          <>
            <ItemList
              items={checkout.lineItems}
              setCartLoading={setIsLoading}
            />
            <CostBlock isLoading={isLoading}>
              <CostDetails>
                Subtotal: <PriceBox>${checkout.subtotalPrice}</PriceBox>
              </CostDetails>
              <CostDetails>
                Taxes: <PriceBox>{checkout.totalTax}</PriceBox>
              </CostDetails>
              <CostDetails>
                Shipping: <PriceBox>TBD</PriceBox>
              </CostDetails>
              <CostTotal>
                Total Price: <PriceBox>${checkout.totalPrice}</PriceBox>
              </CostTotal>
            </CostBlock>
            <Divider />
            <Checkout href={checkout.webUrl}>Check Out</Checkout>
            <ContinueShopping>
              or{' '}
              <ContinueShoppingLink onClick={toggleCart}>
                continue shopping
              </ContinueShoppingLink>
              !
            </ContinueShopping>
            <CurrencyText>
              All prices in USD. Domestic shipping only.
            </CurrencyText>
          </>
        ) : (
          <EmptyCart />
        )}
      </OpenCart>
    )
  )
}

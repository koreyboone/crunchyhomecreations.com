import React, { useContext, useState, useLayoutEffect } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import StoreContext from '../../store/storeContext'

import ProductImage from './productImage'
import {
  colors,
  spacing,
  radius,
  input,
  visuallyHidden,
} from '../../../utils/styles'

const Item = styled.li`
  align-items: center;
  border-bottom: 1px solid ${colors.brandLight};
  display: flex;
  margin: 0;
  margin-left: -${spacing.sm}px;
  margin-right: -${spacing.sm}px;
  padding: ${spacing.sm}px;

  :nth-of-type(2n + 2) {
    background-color: ${colors.brandLight};
  }
`

const Thumb = styled(ProductImage)`
  border-radius: ${radius.default}px;
  box-sizing: border-box;
  display: inline-block;
  height: 40px;
  margin: 0 ${spacing.sm}px 0 0;
  width: 40px;
`

const ItemInfo = styled.p`
  flex: 2 40%;
  margin: 0;
`

const Name = styled.strong`
  display: block;
  font-size: 0.875rem;
`

const MetaData = styled.em`
  color: ${colors.brandLighter};
  display: block;
  font-size: 0.75rem;
  font-style: normal;
`

const inputStyles = css`
  ${input.default};
  width: 100%;

  :focus {
    ${input.focus};
  }

  @media (min-width: 650px) {
    ${input.small};
  }
`

const labelStyles = css`
  ${visuallyHidden};
`

const HiddenLabel = styled.label`
  ${labelStyles};
`

const Quantity = styled.input`
  ${inputStyles};
  /* stylelint-disable */
  margin-right: ${spacing.xs}px;
  /* stylelint-enable */
  max-width: calc(20% - ${spacing.xs}px);
`

const Remove = styled.a`
  border-radius: 50%;
  color: ${colors.brandLighter};
  height: 20px;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  transition: all 0.15s ease-in-out;
  width: 20px;

  :hover {
    background: ${colors.brandPrimary};
    color: ${colors.brandLight};
  }
`

const debounce = (delay, fn) => {
  let timeout

  return function(...args) {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      fn(...args)
      timeout = null
    }, delay)
  }
}

const removeLineItem = async (client, checkoutId, lineItemId, dispatch) => {
  let updatedCheckout

  try {
    updatedCheckout = await client.checkout.removeLineItems(checkoutId, [
      lineItemId,
    ])
    dispatch({ type: 'updateCheckout', payload: { updatedCheckout } })
  } catch (e) {
    console.error(e)
  }
}

const updateLineItem = async (
  client,
  checkoutId,
  lineItemId,
  quantity,
  dispatch
) => {
  const lineItemsToUpdate = [
    { id: lineItemId, quantity: parseInt(quantity, 10) },
  ]

  let updatedCheckout

  try {
    updatedCheckout = await client.checkout.updateLineItems(
      checkoutId,
      lineItemsToUpdate
    )
    dispatch({ type: 'updateCheckout', payload: { updatedCheckout } })
  } catch (e) {
    console.error(e)
  }
}

const LineItem = ({ item, setCartLoading, isCartLoading }) => {
  const [quantity, setQuantity] = useState(item.quantity || 1)
  const { dispatch, client, checkout } = useContext(StoreContext)

  // equivalent to componentWillUnmount()
  useLayoutEffect(
    () => {
      return setCartLoading(false)
    },
    [checkout]
  )

  const handleRemove = event => {
    event.preventDefault()
    setCartLoading(true)
    removeLineItem(client, checkout.id, item.id, dispatch)
  }

  const updateQuantity = async quantity => {
    if (!quantity) {
      return
    }
    await updateLineItem(client, checkout.id, item.id, quantity, dispatch)
    setCartLoading(false)
  }

  return (
    <Item>
      <Thumb
        id={item.variant.image.id}
        fallback={item.variant.image.src}
        alt={item.variant.image.altText}
      />
      <ItemInfo>
        <Name>{item.title}</Name>
        <MetaData>
          {item.variant.title}, ${item.variant.price}
        </MetaData>
      </ItemInfo>
      <HiddenLabel htmlFor={`quantity_${item.id.substring(58, 64)}`}>
        Quantity:
      </HiddenLabel>
      <Quantity
        id={`quantity_${item.id.substring(58, 64)}`}
        type="number"
        name="quantity"
        min="1"
        step="1"
        onChange={({ target }) => {
          if (isCartLoading) return
          const value = target.value
          setQuantity(value)
          setCartLoading(true)
          updateQuantity(value)
        }}
        value={quantity}
      />
      <Remove
        href="#remove"
        title="Remove this item from your cart."
        onClick={e => handleRemove(e)}
      >
        &times;
      </Remove>
    </Item>
  )
}

export default LineItem

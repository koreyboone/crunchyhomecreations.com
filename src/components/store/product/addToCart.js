import React, { useState, useContext } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import StoreContext from '../storeContext'
import {
  button,
  visuallyHidden,
  input,
  select,
  spacing,
} from '../../../utils/styles'

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Button = styled.button`
  ${button.default};
  ${button.small};
  ${button.orange};
`

const labelStyles = css`
  ${visuallyHidden};
`

const HiddenLabel = styled.label`
  ${labelStyles};
`
const inputStyles = css`
  ${input.default};
  /* stylelint-disable */
  margin-top: ${spacing.sm}px;
  /* stylelint-enable */
  width: 100%;

  :focus {
    ${input.focus};
  }

  @media (min-width: 650px) {
    ${input.small};
  }
`

const Size = styled.select`
  ${inputStyles};
  ${select.default};
  /* stylelint-disable */
  flex: 2 70%;
  max-width: 70%;
  /* stylelint-enable */

  @media (min-width: 650px) {
    ${select.small};
  }
`

const VisibleLabel = styled.label`
  font-size: 0.75rem;
  margin-top: ${spacing.sm}px;
`

const Quantity = styled.input`
  ${inputStyles};
  /* stylelint-disable */
  flex: 1 calc(30% - ${spacing.xs}px);
  /* stylelint-enable */
  max-width: calc(30% - ${spacing.xs}px);
`

const addVariantToCart = async (
  dispatch,
  checkoutId,
  client,
  variantId,
  quantity
) => {
  if (variantId === '' || !quantity) {
    console.error('Both a size and quantity are required.')
    return
  }

  const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }]
  let updatedCheckout
  try {
    updatedCheckout = await client.checkout.addLineItems(
      checkoutId,
      lineItemsToAdd
    )
  } catch (e) {
    console.error(e)
  }

  dispatch({ type: 'updateCheckout', payload: { updatedCheckout } })
}

export default ({ productId, variants }) => {
  const defaultVariantState = variants.length === 1 ? variants[0].shopifyId : ''
  const [variant, setVariant] = useState(defaultVariantState)
  const [quantity, setQuantity] = useState(1)

  const id = productId.substring(58, 64)
  const hasVariants = variants.length > 1

  const { dispatch, checkout, client } = useContext(StoreContext)

  return (
    <Form
      onSubmit={event => {
        event.preventDefault()
        if (variant === '') {
          // TODO design a better way to show errors.
          alert('Please select a size first.')
          return
        }
        if (quantity < 1) {
          alert('Please choose a quantity of 1 or more.')
          return
        }
        addVariantToCart(dispatch, checkout.id, client, variant, quantity)
      }}
    >
      {hasVariants && (
        <>
          <HiddenLabel htmlFor={`variant_${id}`}>Choose a size:</HiddenLabel>
          <Size
            id={`variant_${id}`}
            value={variant}
            name="variant"
            onChange={e => setVariant(e.target.value)}
          >
            <option disabled value="">
              Choose Size
            </option>
            {variants.map(variant => (
              <option
                disabled={!variant.availableForSale}
                value={variant.shopifyId}
                key={variant.shopifyId}
              >
                {variant.title}
              </option>
            ))}
          </Size>
          <HiddenLabel htmlFor={`quantity_${id}`}>Quantity:</HiddenLabel>
        </>
      )}
      {!hasVariants && (
        <VisibleLabel htmlFor={`quantity_${id}`}>Quantity:</VisibleLabel>
      )}
      <Quantity
        type="number"
        id={`quantity_${id}`}
        name="quantity"
        min="1"
        step="1"
        onChange={e => setQuantity(e.target.value)}
        value={quantity}
      />
      <Button type="submit">Add to Cart</Button>
    </Form>
  )
}

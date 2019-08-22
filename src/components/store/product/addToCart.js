import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { colors } from '../../../utils/styles'
import CartIcon from '../cart/icon'

import StoreContext from '../storeContext'
import { button, input, select, spacing } from '../../../utils/styles'
import { BackToProductsLink } from '../../shared/typography'

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Button = styled.button`
  ${button.default};
  ${button.big};
  ${button.orange};
  display: flex;
  justify-content: center;
  align-items: center;
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

const QuantityFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  flex-basis: 65px;
  -webkit-box-flex: 0;
  flex-grow: 0;
  flex-shrink: 0;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  margin: 0px ${spacing.md}px 0px 0px;
  padding: 0;
`

const SizeFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-basis: calc((100% - 16px) - 70px);
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  margin: 0;
  padding: 0;
`

const Size = styled.select`
  ${inputStyles};
  ${select.default};

  @media (min-width: 650px) {
    ${select.small};
  }
`

const Quantity = styled.input`
  ${inputStyles};
  text-align: center;
`

const VisibleLabel = styled.label`
  color: ${colors.brandPrimary};
  display: flex;
  font-size: 1rem;
  padding: 8px;
`

const Errors = styled.div`
  color: red;
  width: 100%;
  border: 1px dotted red;
  padding: ${spacing.xs}px;
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

export default ({ productId, variants, updatePrice }) => {
  const defaultVariantState = variants.length === 1 ? variants[0].shopifyId : ''
  const [variant, setVariant] = React.useState(defaultVariantState)
  const [quantity, setQuantity] = React.useState(1)
  const [errors, setErrors] = React.useState(null)

  const id = productId.substring(58, 64)
  const hasVariants = variants.length > 1

  const [state, dispatch] = React.useContext(StoreContext)
  const { checkout, client } = state

  const variantType = variants[0].selectedOptions[0].name

  const handleSubmit = event => {
    event.preventDefault()
    if (variant === '') {
      // TODO design a better way to show errors.
      setErrors(`Please select a ${variantType}.`)
      return
    }
    if (quantity < 1) {
      setErrors('Please choose a quantity of 1 or more.')
      return
    }
    setErrors(null)
    addVariantToCart(dispatch, checkout.id, client, variant, quantity)
  }

  const updateVariant = e => {
    const shopifyId = e.target.value
    let price
    variants.forEach(variant => {
      if (variant.shopifyId === shopifyId) {
        price = variant.price
        return
      }
    })
    setErrors(null)
    updatePrice(price)
    setVariant(shopifyId)
  }

  return (
    <Form onSubmit={handleSubmit}>
      {errors && <Errors>{errors}</Errors>}
      <QuantityFieldSet>
        <VisibleLabel htmlFor={`quantity_${id}`}>Qty:</VisibleLabel>
        <Quantity
          type="number"
          id={`quantity_${id}`}
          name="quantity"
          min="1"
          step="1"
          onChange={e => setQuantity(e.target.value)}
          value={quantity}
        />
      </QuantityFieldSet>
      {hasVariants && (
        <SizeFieldSet>
          <VisibleLabel htmlFor={`variant_${id}`}>
            Choose a {variantType}:
          </VisibleLabel>
          <Size
            id={`variant_${id}`}
            value={variant}
            name="variant"
            onChange={updateVariant}>
            <option disabled value="">
              Choose a {variantType}
            </option>
            {variants.map(variant => (
              <option
                disabled={!variant.availableForSale}
                value={variant.shopifyId}
                key={variant.shopifyId}>
                {variant.title}
              </option>
            ))}
          </Size>
        </SizeFieldSet>
      )}
      <Button type="submit">
        Add to Cart &nbsp; <CartIcon />
      </Button>
      <BackToProductsLink to="/">
        ← &nbsp; Back to Product Listing
      </BackToProductsLink>
    </Form>
  )
}

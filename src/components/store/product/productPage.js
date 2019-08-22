/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { css, jsx } from '@emotion/core'

import { spacing, breakpoints, colors, fonts } from '../../../utils/styles'
import AddToCart from './addToCart'

const ProductContainer = styled.div`
  padding-bottom: ${spacing.md}px;

  @media (min-width: ${breakpoints.desktop}px) {
    display: flex;
    width: 100%;
    max-width: ${breakpoints.desktop}px;
    margin: 0 auto;
    margin-top: ${spacing.xl}px;
    margin-bottom: ${spacing.xl}px;
    justify-content: space-between;
    align-items: center;
  }
`

const ProductImageWrapper = styled.div`
  width: 100%;
  padding: ${spacing.md}px ${spacing.md}px ${spacing.sm}px;
  @media (min-width: ${breakpoints.desktop}px) {
    width: 49%;
    padding: 0;
  }
`

const imageStyles = css`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 10px;
  border-radius: 4px;
`

const ProductInfo = styled.div`
  padding: 0px ${spacing.md}px;

  @media (min-width: ${breakpoints.desktop}px) {
    width: 49%;
  }
`

const ProductTitle = styled.h1`
  color: ${colors.brandPrimary};
  font-family: ${fonts.heading};
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0;
`

const Description = styled.p`
  color: ${colors.brandDark};
  font-size: 1rem;
  line-height: 1.5;
`

const Price = styled.p`
  color: ${colors.brandLighter};
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.02em;
`

const ProductPage = ({ product }) => {
  const [price, setPrice] = React.useState(product.variants[0].price)
  const [variantSelected, setVariantSelected] = React.useState(false)

  const updatePrice = price => {
    setPrice(price)
    setVariantSelected(true)
  }

  return (
    <ProductContainer>
      <ProductImageWrapper>
        <Img
          css={imageStyles}
          fluid={product.images[0].localFile.childImageSharp.fluid}
        />
      </ProductImageWrapper>
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <Description>{product.description}</Description>
        <Price>
          <span
            css={css`
              color: rgb(100, 113, 138);
            `}>
            USD
          </span>{' '}
          ${price}
          {!variantSelected && product.variants.length !== 1 ? '+' : ''}
        </Price>
        <AddToCart
          productId={product.id}
          variants={product.variants}
          updatePrice={updatePrice}
        />
      </ProductInfo>
    </ProductContainer>
  )
}

export default ProductPage

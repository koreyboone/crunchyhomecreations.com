import React from 'react'
import styled from '@emotion/styled'

import { colors, fonts } from '../../utils/styles'
import ProductImages from './productImages'
import AddToCart from './addToCart'

const Preview = styled.div`
  display: inline-block;
  margin-bottom: 3rem;
  width: 100%;
`

const Name = styled.h3`
  color: ${colors.brandPrimary};
  font-family: ${fonts.heading};
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0 0;

  @media (min-width: 650px) {
    font-size: 1.25rem;
  }
`

const Description = styled.p`
  color: ${colors.brandLighter};
  font-weight: 300;
  margin-top: 0.25rem;

  @media (min-width: 650px) {
    font-size: 0.875rem;
    min-height: 115px;
  }
`

const Price = styled.p`
  color: ${colors.brandLighter};
  font-family: ${fonts.heading};
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: 0;

  @media (min-width: 650px) {
    font-size: 1.25rem;
  }
`

export default ({ product }) => (
  <Preview>
    <ProductImages images={product.images} alt={product.title} />
    <Name>{product.title}</Name>
    <Price>
      USD ${product.variants[0].price}
      {product.variants.length !== 1 ? '+' : ''}
    </Price>
    <Description>{product.description.slice(0, 300)}...</Description>
    <AddToCart productId={product.id} variants={product.variants} />
  </Preview>
)

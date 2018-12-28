import React from 'react'
import styled from '@emotion/styled'

import { colors, fonts } from '../../utils/styles'
import ProductImages from './productImages'

const Preview = styled('div')`
  display: inline-block;
  margin-bottom: 3rem;
  width: 100%;

  @media (min-width: 480px) {
    margin-left: 6%;
    width: 47%;

    :nth-of-type(2n + 1) {
      margin-left: 0;
    }
  }

  @media (min-width: 650px) {
    margin-left: 5%;
    width: 30%;

    :nth-of-type(2n + 1) {
      margin-left: 5%;
    }

    :nth-of-type(3n + 1) {
      margin-left: 0;
    }
  }
`

const Name = styled.h3`
  color: ${colors.darkest};
  font-family: ${fonts.heading};
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0 0;

  @media (min-width: 650px) {
    font-size: 1.25rem;
  }
`

const Description = styled.p`
  color: ${colors.brandSecondaryLight};
  font-weight: 300;
  margin-top: 0.25rem;

  @media (min-width: 650px) {
    font-size: 0.875rem;
    min-height: 115px;
  }
`

// const Description = styled('p')`

//   @media (min-width: 650px) {
//     font-size: 0.875rem;
//     min-height: 115px;
//   }
// `

const Price = styled.p`
  color: ${colors.brandSecondaryLight};
  font-family: ${fonts.heading};
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
`

// const Price = styled('p')`
//   @media (min-width: 650px) {
//     font-size: 1.25rem;
//   }
// `

export default ({ product }) => (
  <Preview>
    <ProductImages images={product.images} alt={product.title} />
    <Name>{product.title}</Name>
    <Price>USD ${product.variants[0].price}</Price>
    <Description>{product.description.slice(0, 150)}...</Description>
  </Preview>
)

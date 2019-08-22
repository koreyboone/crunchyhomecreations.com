import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import {
  colors,
  fonts,
  radius,
  spacing,
  breakpoints,
} from '../../../utils/styles'
import ProductImages from './productImages'

const ViewProduct = styled.span`
  color: ${colors.brandSecondaryLight};
  font-size: 0.9rem;
  transition: all 250ms linear;
  text-align: right;
`

const Preview = styled(Link)`
  background: ${colors.lightest};
  border-radius: ${radius.large}px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
  margin-bottom: ${spacing.lg}px;
  overflow: hidden;
  text-decoration: none;
  transition: all 250ms ease 0s;

  @media (min-width: ${breakpoints.tablet}px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    flex-basis: 300px;
    justify-content: center;
    margin: ${spacing.md * 1.25}px;
  }

  :hover {
    background: rgb(252, 252, 255);

    ${ViewProduct} {
      margin-right: 10px;
    }
  }
`

const Item = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${spacing.lg}px;
`

const ImageWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid rgb(245, 243, 247);
  border-radius: 4px 4px 0px 0px;
  margin: -24px -24px 24px;
  overflow: hidden;
`

const Name = styled.h3`
  color: ${colors.brandPrimary};
  font-family: ${fonts.heading};
  font-size: 1.6rem;
  line-height: 1.2;
  margin: 0px;
`

const Description = styled.p`
  color: ${colors.brandLighter};
  flex-grow: 1;
  font-size: 1rem;
  line-height: 1.5;
`
const PriceAndViewProductWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
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

const Product = ({ product }) => (
  <Preview to={`/product/${product.handle}/`}>
    <Item>
      <ImageWrapper>
        <ProductImages images={product.images} alt={product.title} />
      </ImageWrapper>
      <Name>{product.title}</Name>

      <Description>
        {`${product.description.slice(0, 100)}`}
        {product.description.length >= 100 ? '...' : null}
      </Description>
      <PriceAndViewProductWrapper>
        <Price>
          USD ${product.variants[0].price}
          {product.variants.length !== 1 ? '+' : ''}
        </Price>
        <ViewProduct>
          View Details <br /> & Buy →
        </ViewProduct>
      </PriceAndViewProductWrapper>
    </Item>
  </Preview>
)

Product.propTypes = {
  product: PropTypes.object.isRequired,
}

export default Product

import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import onClickOutside from 'react-onclickoutside'

import {
  colors,
  fonts,
  radius,
  spacing,
  breakpoints,
} from '../../../utils/styles'
import ProductImages from './productImages'
import AddToCart from './addToCart'

const Preview = styled.div`
  background: ${colors.lightest};
  border-radius: ${radius.large}px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
  margin-bottom: ${spacing.lg}px;
  overflow: hidden;
  text-decoration: none;

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
`

const Item = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${spacing.lg}px;
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
  font-size: 1rem;
  line-height: 1.5;
  min-height: 100px;

  @media (min-width: 650px) {
    font-size: 0.875rem;
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

const ExpandText = styled.span`
  font-weight: 500;
  color: ${colors.brandSecondaryLight};
`

class Product extends React.Component {
  state = {
    descriptionExpanded: false,
  }

  handleClickOutside = event => {
    if (this.state.descriptionExpanded) {
      this.setState({ descriptionExpanded: false })
    }
  }

  render() {
    const { product } = this.props
    const { descriptionExpanded } = this.state
    return (
      <Preview>
        <Item>
          <ProductImages images={product.images} alt={product.title} />
          <Name>{product.title}</Name>
          <Price>
            USD ${product.variants[0].price}
            {product.variants.length !== 1 ? '+' : ''}
          </Price>
          <Description>
            {descriptionExpanded
              ? `${product.description}`
              : `${product.description.slice(0, 200)}`}
            {product.description.length >= 200 ? (
              <ExpandText
                onClick={() =>
                  this.setState({ descriptionExpanded: !descriptionExpanded })
                }>
                {descriptionExpanded ? '...Less' : '...More'}
              </ExpandText>
            ) : null}
          </Description>
          <AddToCart productId={product.id} variants={product.variants} />
        </Item>
      </Preview>
    )
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
}

export default onClickOutside(Product)

import React from 'react'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'

import Product from './product/product'
import { breakpoints, spacing } from '../../utils/styles'

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${spacing.lg}px;

  @media (min-width: ${breakpoints.desktop}px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: ${spacing['2xl']}px;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query ProductListingsQuery {
        products: allShopifyProduct(sort: { order: ASC, fields: title }) {
          edges {
            node {
              id
              title
              description
              productType
              variants {
                shopifyId
                title
                price
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
              images {
                id
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910, maxHeight: 910) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ products }) => (
      <ProductsContainer>
        {products.edges.map(({ node: product }) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsContainer>
    )}
  />
)

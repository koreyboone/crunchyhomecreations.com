import React from 'react'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'

import Product from './product'

const Previews = styled.div`
  margin-top: 2rem;

  @media (min-width: 480px) {
    display: grid;
    grid-gap: 5%;
    grid-template-columns: auto auto;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query ProductListingsQuery {
        products: allShopifyProduct {
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
      <Previews>
        {products.edges.map(({ node: product }) => (
          <Product key={product.id} product={product} />
        ))}
      </Previews>
    )}
  />
)

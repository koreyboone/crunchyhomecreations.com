import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout.js'

export default () => (
  <StaticQuery
    query={graphql`
      query ProductsQuery {
        allShopifyProduct {
          edges {
            node {
              id
              descriptionHtml
              handle
              title
              images {
                localFile {
                  childImageSharp {
                    fixed(width: 500) {
                      ...GatsbyImageSharpFixed_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ allShopifyProduct }) => (
      <Layout>
        <h2>{JSON.stringify(allShopifyProduct.edges[0].node.title)}</h2>
        <div
          style={{ fontSize: '.9rem' }}
          dangerouslySetInnerHTML={{
            __html: allShopifyProduct.edges[0].node.descriptionHtml,
          }}
        />
        {allShopifyProduct.edges[0].node.images.map(image => (
          <Img fixed={image.localFile.childImageSharp.fixed} />
        ))}
      </Layout>
    )}
  />
)

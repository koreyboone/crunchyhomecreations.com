import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import ProductPage from '../components/store/product/productPage'

export default ({ location, data }) => {
  const {
    site,
    product,
    product: { description, handle, title },
  } = data

  const {
    siteMetadata: { siteUrl },
  } = site

  const image = product.images[0].localFile.childImageSharp.fluid.src
  const canonical = `${siteUrl}${location.pathname}`

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        <meta property="og:url" content={`${siteUrl}/product/${handle}`} />
        <meta property="og:locale" content="en" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Crunchy Home Creations" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${image}`} />
        <meta property="og:image:alt" content={title} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
      </Helmet>

      <ProductPage product={product} />
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query ProductPageQuery($id: String!) {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
    product: shopifyProduct(id: { eq: $id }) {
      id
      handle
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
`

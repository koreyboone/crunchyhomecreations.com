import React, { useEffect, useReducer } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import queryString from 'query-string'

import StoreContext, { defaultStoreContext } from '../store/storeContext'
import storeReducer from '../store/storeReducer'
import Header from './header/header'
import Footer from './footer/footer'
import SEO from './seo.js'
import { breakpoints } from '../../utils/styles'

// Import Futura PT typeface
import '../../fonts/futura-pt/Webfonts/futurapt_demi_macroman/stylesheet.css'

const globalStyles = css`
  * {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    color: #333333;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    margin: 0 auto;
    line-height: 1.375;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }

  textarea {
    overflow: auto;
  }
`

const Main = styled('main')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  min-height: calc(100vh - 60px);
  opacity: 1;
  width: 100%;
  max-width: ${breakpoints.hd}px;
  position: relative;
  transition: 0.75s;
  will-change: transform;
`

const initializeCheckout = async client => {
  // Check for an existing cart.
  const isBrowser = typeof window !== 'undefined'
  const existingCheckoutID = isBrowser
    ? localStorage.getItem('shopify_checkout_id')
    : null

  const createNewCheckout = () => client.checkout.create()
  const fetchCheckout = id => client.checkout.fetch(id)

  if (existingCheckoutID) {
    try {
      const checkout = await fetchCheckout(existingCheckoutID)

      // Make sure this cart hasn’t already been purchased.
      if (!checkout.completedAt) {
        if (isBrowser) {
          localStorage.setItem('shopify_checkout_id', checkout.id)
        }
        return checkout
      }
    } catch (e) {
      console.error('Problem loading cart from Shopify.')
      localStorage.setItem('shopify_checkout_id', null)
    }
  }

  const newCheckout = await createNewCheckout()
  if (isBrowser) {
    localStorage.setItem('shopify_checkout_id', newCheckout.id)
  }
  return newCheckout
}

function useShopifyCollections() {
  const data = useStaticQuery(graphql`
    query ProductListingsQuery {
      collections: allShopifyCollection {
        edges {
          node {
            title
            products {
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
        }
      }
    }
  `)

  const collections = data.collections.edges.map(
    ({ node: collection }) => collection
  )

  const collectionTitles = collections.map(collection =>
    collection.title.toLowerCase().trim()
  )

  return [collections, collectionTitles]
}

const Layout = ({ children, location }) => {
  const [collections, collectionTitles] = useShopifyCollections()

  const [state, dispatch] = useReducer(storeReducer, {
    ...defaultStoreContext,
    collections,
  })

  useEffect(() => {
    if (location) {
      const values = queryString.parse(location.search)
      if (
        values.filter &&
        collectionTitles.includes(values.filter.toLowerCase().trim())
      ) {
        dispatch({ type: 'changeCollection', payload: values.filter.trim() })
      }
    }
  }, [])

  useEffect(() => {
    initializeCheckout(state.client)
      .then(checkout => {
        dispatch({ type: 'initializeCheckout', payload: checkout })
      })
      .catch(e => console.error('Could not initialize checkout\n', e))
  }, [])

  const contextValues = [state, dispatch]

  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <SEO />
      <StoreContext.Provider value={contextValues}>
        <Header />
        <Main>
          {children}
          <Footer />
        </Main>
      </StoreContext.Provider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

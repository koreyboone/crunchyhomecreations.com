import React, { useEffect, useReducer } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import StoreContext, { defaultStoreContext } from '../store/storeContext'
import storeReducer from '../store/storeReducer'
import Header from './header/header'
import Footer from './footer/footer'
import SEO from './seo.js'
import { breakpoints } from '../../utils/styles'

// Import Futura PT typeface
import '../../fonts/futura-pt/Webfonts/futurapt_demi_macroman/stylesheet.css'

const Main = styled('main')`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
  width: 100%;
  max-width: ${breakpoints.hd}px;
  position: relative;
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

  return data.collections.edges.map(({ node: collection }) => collection)
}

const Layout = ({ children }) => {
  const collections = useShopifyCollections()
  const [state, dispatch] = useReducer(storeReducer, {
    ...defaultStoreContext,
    collections,
  })

  useEffect(() => {
    initializeCheckout(state.client)
      .then(checkout => {
        dispatch({ type: 'initializeCheckout', payload: checkout })
      })
      .catch(e => console.error('Could not initialize checkout\n', e))
  }, [dispatch])

  const contextValues = [state, dispatch]

  return (
    <>
      <SEO />
      <StoreContext.Provider value={contextValues}>
        <Header />
        <Main> {children} </Main>
        <Footer />
      </StoreContext.Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React, { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import StoreContext, { defaultStoreContext } from '../store/storeContext'
import storeReducer from '../store/storeReducer'
import Header from './header/header'
import Footer from './footer/footer'
import SEO from './seo.js'
import { spacing } from '../../utils/styles'

// Import Futura PT typeface
import '../../fonts/futura-pt/Webfonts/futurapt_demi_macroman/stylesheet.css'

const Main = styled('main')`
  display: block;
  margin: 0 auto;
  max-width: 1200px;
  padding: ${spacing.xl}px ${spacing.sm}px ${spacing['3xl']}px;
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

const Layout = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, { ...defaultStoreContext })

  useEffect(
    () => {
      initializeCheckout(state.client)
        .then(checkout => {
          dispatch({ type: 'initializeCheckout', payload: checkout })
        })
        .catch(e => console.error('Could not initialize checkout\n', e))
    },
    [dispatch]
  )

  const contextValues = { ...state, dispatch }

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

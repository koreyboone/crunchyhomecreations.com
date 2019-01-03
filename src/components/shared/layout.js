import React, { useState, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
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
  max-width: 600px;
  padding: ${spacing.xl}px ${spacing.sm}px ${spacing['3xl']}px;
  position: relative;
`

const Layout = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, {
    ...defaultStoreContext,
  })

  const contextValues = {...state, dispatch}

  return <>
      <SEO />
      <StoreContext.Provider value={contextValues}>
        <Header />
        <Main> {children} </Main>
        <Footer />
      </StoreContext.Provider>
    </>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

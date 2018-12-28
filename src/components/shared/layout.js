import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import Header from './header/header'
import Footer from './footer/footer'
import SEO from './seo.js'
import { spacing } from '../../utils/styles'

// Import Futura PT typeface
import '../../fonts/futura-pt/Webfonts/futurapt_demi_macroman/stylesheet.css';

const Main = styled('main')`
  display: block;
  margin: 0 auto;
  max-width: 600px;
  padding: ${spacing.xl}px ${spacing.sm}px ${spacing['3xl']}px;
  position: relative;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main> {children} </Main>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

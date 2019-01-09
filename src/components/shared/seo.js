import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

export default () => (
  <StaticQuery
    query={detailsQuery}
    render={({
      site: {
        siteMetadata: { siteUrl, title, description },
      },
    }) => (
      <Helmet defaultTitle={title} titleTemplate={`%s · ${title}`}>
        <html lang="en" />

        <link
          rel="preconnect"
          href="https://crunchyhomecreations.myshopify.com"
        />

        <link rel="canonical" href={siteUrl} />
        <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#0b3a61" />
          <meta name="theme-color" content="#0b3a61" />

        <meta name="description" content={description} />

        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />

        <meta
          property="og:image"
          content={`${siteUrl}/android-chrome-512x512.png`}
        />
        <meta property="og:image:alt" content="Gatsby Store Logo" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@gatsbyjs" />
      </Helmet>
    )}
  />
)

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`

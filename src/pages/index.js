import React from 'react'
import styled from '@emotion/styled'

import Layout from '../components/shared/layout'
import Store from '../components/store/store'
import { fonts, breakpoints } from '../utils/styles'

const Headline = styled.h1`
  font-family: ${fonts.heading};
  font-size: 1.5rem;
  text-align: center;

  @media (min-width: ${breakpoints.hd}px) {
    font-size: 2rem;
  }
`

const IndexPage = () => (
  <Layout>
    <Headline>Welcome to our Crunchy Store!</Headline>
    <Store />
  </Layout>
)

export default IndexPage

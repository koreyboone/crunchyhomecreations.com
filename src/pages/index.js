import React from 'react'
import styled from '@emotion/styled'

import Layout from '../components/shared/layout'
import Store from '../components/store/store'
import { pullHeadline, breakpoints } from '../utils/styles'

const Headline = styled.h1`
  ${pullHeadline};

  @media (min-width: ${breakpoints.hd}px) {
    padding-top: 80px;
  }
`


const IndexPage = () => (
  <Layout>
    <Headline>Check out our stuff!</Headline>
    <Store />
  </Layout>
)

export default IndexPage

import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Cart from '../../store/cart/cart'
import Logo from './logo'
import { colors, spacing } from '../../../utils/styles'

const Header = styled.header`
  align-items: center;
  border-bottom: 1px solid ${colors.brandLight};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${colors.lightest};
  box-sizing: border-box;
  display: flex;
  height: 60px;
  justify-content: space-between;
  left: 0;
  padding-left: ${spacing.md}px;
  padding-right: ${spacing.md}px;
  position: sticky;
  right: 0;
  top: 0;
  z-index: 4;
`

const HomeLink = styled(Link)`
  display: block;
  flex-shrink: 0;
  line-height: 1;
  margin-right: auto;
`

export default () => (
  <Header>
    <HomeLink to="/">
      <Logo />
    </HomeLink>
    <Cart />
  </Header>
)

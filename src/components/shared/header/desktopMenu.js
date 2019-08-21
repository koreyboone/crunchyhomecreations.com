import React from 'react'
import styled from '@emotion/styled'
import { navigate } from 'gatsby'

import { colors, fonts } from '../../../utils/styles'

const Nav = styled.nav`
  display: flex;
`

const MenuItem = styled.li`
  list-style: none;
  margin-right: 1.2rem;
  color: ${colors.brandPrimary};
  font-family: ${fonts.body};
  font-size: 1.1rem;

  :hover {
    color: ${colors.brandSecondaryLight};
    transition: all 300ms ease;
  }
`

export default ({ filterProducts, collections }) => (
  <Nav>
    {collections.map((collection, index) => (
      <MenuItem
        key={`${collection}_${index}`}
        onClick={() => filterProducts(collection.title)}>
        {collection.title}
      </MenuItem>
    ))}
    <MenuItem onClick={() => navigate('/support')}>FAQs</MenuItem>
  </Nav>
)

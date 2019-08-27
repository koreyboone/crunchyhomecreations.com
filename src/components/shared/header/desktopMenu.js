import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { useHover } from '../hooks'
import { colors, fonts, fadeIn, navDropdown } from '../../../utils/styles'

const Nav = styled.nav`
  display: flex;
`

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: 1.4rem;
  color: ${colors.brandPrimary};
  font-family: ${fonts.body};
  font-size: 1.3rem;

  :hover {
    color: ${colors.brandSecondaryLight};
    transition: all 300ms ease;
  }

  & > a {
    text-decoration: none;
    color: inherit;
  }
`

const DropdownMenu = styled.ul`
  ${navDropdown.container};
  width: 200px;
  animation: ${fadeIn} 150ms ease-out;
  display: flex;
  flex-direction: column;
`

const Downarrow = styled.span`
  font-size: 0.7rem;
  margin-top: 4px;
  margin-left: 4px;
`

const DropdownItem = styled.li`
  ${navDropdown.item};
`

export default ({ filterProducts, collections }) => {
  const [hovering, attrs] = useHover()

  return (
    <Nav>
      <MenuItem {...attrs}>
        Products <Downarrow>▼</Downarrow>
      </MenuItem>
      {hovering && (
        <DropdownMenu {...attrs}>
          {collections.map((collection, index) => (
            <DropdownItem
              key={`${collection}_${index}`}
              onClick={() => filterProducts(collection.title)}>
              {collection.title}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
      <MenuItem>
        <Link to="/support">Support</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/contact">Contact Us</Link>
      </MenuItem>
    </Nav>
  )
}

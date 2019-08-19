import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useWindowDimensions } from '../hooks/hooks'
import { FaBars } from 'react-icons/fa'

import Cart from '../../store/cart/cart'
import Logo from './logo'
import { colors, spacing, breakpoints, fonts } from '../../../utils/styles'
import StoreContext from '../../store/storeContext'

const Header = styled.header`
  background-color: ${colors.lightest};
  border-bottom: 1px solid ${colors.brandLight};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  height: 60px;
  left: 0;
  padding-left: ${spacing.md}px;
  padding-right: ${spacing.md}px;
  position: sticky;
  right: 0;
  top: 0;
  z-index: 4;
`

const InnerContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  margin: 0 auto;
  max-width: ${breakpoints.desktop}px;
  justify-content: space-between;
`

const HomeLink = styled(Link)`
  display: block;
  flex-shrink: 0;
  line-height: 1;
`

const DesktopMenu = styled.nav`
  display: flex;
`

const MenuItem = styled.li`
  list-style: none;
  margin-right:1.2rem;
   color: ${props =>
     props.isActive ? colors.brandSecondaryLight : colors.brandPrimary};
  font-family: ${fonts.body};
  font-size: 1.1rem;

  :hover {
  color: ${colors.brandSecondaryLight};
  transition: all 300ms ease;

  :active {
    color: ${colors.brandSecondaryLight};
  }
`

const MobileMenu = styled(FaBars)`
  }
`

export default () => {
  const [width] = useWindowDimensions()
  const [state, dispatch] = React.useContext(StoreContext)

  const filterProducts = collection => {
    dispatch({ type: 'changeCollection', payload: collection })
  }

  if (width > breakpoints.tablet) {
    return (
      <Header>
        <InnerContainer>
          <HomeLink to="/">
            <Logo />
          </HomeLink>
          <DesktopMenu>
            <MenuItem
              onClick={() => filterProducts('All')}
              isActive={state.selectedCollection === 'All'}>
              All
            </MenuItem>
            {state.collections.map((collection, index) =>
              collection.title !== 'All' ? (
                <MenuItem
                  key={`${collection}_${index}`}
                  onClick={() => filterProducts(collection.title)}
                  isActive={state.selectedCollection === collection.title}>
                  {collection.title}
                </MenuItem>
              ) : null
            )}
          </DesktopMenu>
          <Cart />
        </InnerContainer>
      </Header>
    )
  }

  return (
    <Header>
      <InnerContainer>
        <MobileMenu size={20}>Menu</MobileMenu>
        <HomeLink to="/">
          <Logo />
        </HomeLink>
        <Cart />
      </InnerContainer>
    </Header>
  )
}

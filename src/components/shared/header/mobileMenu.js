import React from 'react'
import styled from '@emotion/styled'

import StoreContext from '../../store/storeContext'
import { colors, fonts } from '../../../utils/styles'

const MenuToggle = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  user-select: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 32px;
  cursor: pointer;
  z-index: 2;
`

const Bar = styled.span`
  display: flex;
  width: 29px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  background: ${props => (props.toggled ? '#36383f' : '#000000')};
  border-radius: 3px;
  z-index: 1;
  transform-origin: 5px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  transform: ${props =>
    props.toggled ? 'rotate(45deg) translate(-2px, -1px)' : ''};

  :first-of-type {
    margin-top: 5px;
    . transform-origin: 0% 0%;
  }

  :nth-last-of-type(1) {
    transform-origin: 0% 100%;
    transform: ${props =>
      props.toggled ? 'rotate(-45deg) translate(-1px, 0px)' : ''};
  }

  :nth-last-of-type(2) {
    opacity: ${props => (props.toggled ? 0 : 1)};
    transform: ${props =>
      props.toggled ? 'rotate(0deg) scale(0.2, 0.2)' : ''};
  }
`

const Menu = styled.ul`
  background-color: ${colors.lightest};
  box-shadow: 0 0 10px #85888c;
  height: 100vh;
  width: 75vw;
  top: 0;
  left: 0;
  list-style-type: none;
  margin: 0;
  position: absolute;
  padding: 50px;
  padding-top: 125px;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: ${props => (!props.toggled ? 'translate(-100%, 0)' : 'none')};
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  z-index: 1;
`

const MenuItem = styled.li`
  color: ${props =>
    props.isActive ? colors.brandSecondaryLight : colors.brandPrimary};
  font-family: ${fonts.heading};
  font-size: 1.5rem;
  font-weight: 500;
  padding: 10px 0;
  transition-delay: 2s;
`

const MenuHeading = styled.h1`
  color: ${colors.brandPrimary};
  font-family: ${fonts.heading};
  font-weight: 500;
  padding: 10px 0;
  transition-delay: 2s;
`

export default ({ filterProducts }) => {
  const [state] = React.useContext(StoreContext)
  const [toggled, setToggled] = React.useState(false)

  const { collections, selectedCollection } = state

  return (
    <React.Fragment>
      <Menu toggled={toggled}>
        <MenuHeading>Filters</MenuHeading>
        {collections.map((collection, index) => (
          <MenuItem
            key={`${collection}_${index}`}
            onClick={() => {
              setToggled(false)
              filterProducts(collection.title)
            }}
            isActive={selectedCollection === collection.title}>
            {collection.title}
          </MenuItem>
        ))}
      </Menu>
      <MenuToggle onClick={() => setToggled(!toggled)}>
        <Bar toggled={toggled} />
        <Bar toggled={toggled} />
        <Bar toggled={toggled} />
      </MenuToggle>
    </React.Fragment>
  )
}

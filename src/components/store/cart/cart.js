import React from 'react'
import styled from '@emotion/styled'
import onClickOutside from 'react-onclickoutside'

import { withStoreContext } from '../storeContext'
import MenuToggle from './menuToggle'
import CartPreview from './cartPreview'

class Cart extends React.PureComponent {
  handleClickOutside = event => {
    const { dispatch, isCartOpen } = this.props.storeContext
    isCartOpen && dispatch({ type: 'toggleCart'})
  }

  render() {
    return (
      <>
        <MenuToggle />
        <CartPreview />
      </>
    )
  }
}

export default withStoreContext(onClickOutside(Cart))

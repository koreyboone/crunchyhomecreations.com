import React from 'react'
import onClickOutside from 'react-onclickoutside'

import { withStoreContext } from '../storeContext'
import MenuToggle from './menuToggle'
import CartPreview from './cartPreview'

class Cart extends React.PureComponent {
  handleClickOutside = event => {
    const [state, dispatch] = this.props.storeContext
    state.isCartOpen && dispatch({ type: 'toggleCart' })
  }

  render() {
    return (
      <div>
        <MenuToggle />
        <CartPreview />
      </div>
    )
  }
}

export default withStoreContext(onClickOutside(Cart))

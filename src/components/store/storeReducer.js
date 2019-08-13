import { defaultStoreContext } from './storeContext'

const initialState = defaultStoreContext

export default (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState

    case 'initializeCheckout':
      const checkout = action.payload
      return { ...state, checkout }

    case 'updateCheckout':
      const { updatedCheckout } = action.payload
      return { ...state, checkout: updatedCheckout, isCartOpen: true }

    case 'toggleCart':
      return { ...state, isCartOpen: !state.isCartOpen }

    default:
      return state // Change this to throw new Error('Action not supported')
  }
}

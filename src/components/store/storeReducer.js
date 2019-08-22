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

    case 'initializeCollections':
      return { ...state, collections: action.payload }

    case 'changeCollection':
      return { ...state, selectedCollection: action.payload, isCartOpen: false }

    default:
      throw new Error('Action not supported')
  }
}

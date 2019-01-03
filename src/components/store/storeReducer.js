import { defaultStoreContext } from './storeContext'

const initialState = defaultStoreContext

export default (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState
    case 'toggleCart':
      return { ...state, isCartOpen: !state.isCartOpen }
    default:
      return state
  }
}

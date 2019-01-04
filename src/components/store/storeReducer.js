import { defaultStoreContext } from './storeContext'

const initialState = defaultStoreContext

export default (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState

    case 'initializeCheckout':
      const checkout = action.payload
      console.log('Inside initializeCheckout dispatch ', action.payload)
      return { ...state, checkout }

    case 'addVariantToCart':
      //TODO - Move this into Add item to cart and only handle the state update here
      console.log('Inside addVariantToCart dispatch')
      console.log('state: ', state)
      console.log('action: ', action)
      const { variantId, quantity } = action.payload
      if (variantId === '' || !quantity) {
        console.error('Both a size and quantity are required.')
        return state
      }

      const newState = JSON.parse(JSON.stringify(state))
      newState.isCartOpen = true

      const checkoutId = newState.checkout.id
      const lineItemsToUpdate = [
        { variantId, quantity: parseInt(quantity, 10) },
      ]

      const updatedCheckout = await newState.client.checkout.addLineItems(
        checkoutId,
        lineItemsToUpdate
      )

      return { ...newState, updatedCheckout }

    case 'toggleCart':
      return { ...state, isCartOpen: !state.isCartOpen }

    default:
      return state
  }
}

import React from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: 'crunchyhomecreations.myshopify.com',
  storefrontAccessToken: 'd0099fc9d0ddf3c1bc9d4cc8f622468a', // This access token is not a secret
})

export const defaultStoreContext = {
  client,
  isCartOpen: false,
  checkout: { lineItems: [] },
  collections: [],
  selectedCollection: 'All',
  shop: {},
}

const StoreContext = React.createContext(defaultStoreContext)

export const withStoreContext = Component => {
  return props => (
    <StoreContext.Consumer>
      {context => <Component {...props} storeContext={context} />}
    </StoreContext.Consumer>
  )
}

export default StoreContext

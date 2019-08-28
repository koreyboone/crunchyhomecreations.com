import React from 'react'
import styled from '@emotion/styled'
import StoreContext from '../store/storeContext'

import Product from './product'
import { breakpoints, spacing } from '../../utils/styles'

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${spacing.lg}px;

  @media (max-width: ${breakpoints.desktop}px) {
    align-items: center;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    flex-direction: row;
    flex-wrap: wrap;

    padding: ${spacing['2xl']}px;
  }
`

export default () => {
  const [state] = React.useContext(StoreContext)
  const { collections, selectedCollection } = state

  return (
    <ProductsContainer>
      {collections
        .filter(collection => collection.title.toLowerCase() === selectedCollection.toLowerCase())[0]
        .products.map(product => (
          <Product key={product.id} product={product} />
        ))}
    </ProductsContainer>
  )
}

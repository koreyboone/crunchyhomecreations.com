import React from 'react'
import styled from '@emotion/styled'
import StoreContext from '../store/storeContext'

import Product from './product/product'
import { breakpoints, spacing } from '../../utils/styles'

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacing.lg}px;
  padding-top: 0px;

  @media (min-width: ${breakpoints.desktop}px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: ${spacing['2xl']}px;
    padding-top: 0;
  }
`

export default () => {
  const [state] = React.useContext(StoreContext)
  const { collections, selectedCollection } = state

  return (
    <ProductsContainer>
      {collections
        .filter(collection => collection.title === selectedCollection)[0]
        .products.map(product => (
          <Product key={product.id} product={product} />
        ))}
    </ProductsContainer>
  )
}

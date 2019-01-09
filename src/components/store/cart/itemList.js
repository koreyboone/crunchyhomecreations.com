import React from 'react'
import styled from '@emotion/styled'

import LineItem from './lineItem'

const ItemList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export default ({ items, setCartLoading }) => (
  <ItemList>
    {items.map(item => (
      <LineItem key={item.id} item={item} setCartLoading={setCartLoading} />
    ))}
  </ItemList>
)

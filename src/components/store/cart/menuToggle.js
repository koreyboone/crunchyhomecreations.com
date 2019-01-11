import React, { useContext } from 'react'
import styled from '@emotion/styled'

import StoreContext from '../storeContext'
import Icon from './icon'
import { button, colors, spacing } from '../../../utils/styles'

const Button = styled.button`
  ${button.default};
  ${button.ghost};
  ${button.small};
  /* stylelint-disable */
  align-items: center;
  /* stylelint-enable */
  display: flex;
  justify-content: space-between;
  margin-left: ${spacing.sm}px;
  position: relative;
`

const ButtonCount = styled.span`
  background: ${colors.brandBright};
  border-radius: 50%;
  box-sizing: border-box;
  color: ${colors.brandPrimary};
  display: inline-block;
  font-size: 0.5rem;
  font-weight: 900;
  height: 2em;
  line-height: 2em;
  margin-left: ${spacing.xs}px;
  position: relative;
  user-select: none;
  width: 2em;
`

export default () => {
  const { checkout, dispatch } = useContext(StoreContext)
  return (
    <Button onClick={() => dispatch({ type: 'toggleCart' })}>
      <Icon />
      <ButtonCount>
        {checkout.lineItems.reduce((total, item) => total + item.quantity, 0)}
      </ButtonCount>
    </Button>
  )
}

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import { colors } from '../../../utils/styles'

const svg = css`
  display: inline-block;
  height: 48px;
`

const Logo = () => (
  <svg viewBox="0 0 130 28" css={svg}>
    <text x="0" y="20" textLength="130" lengthAdjust="spacingAndGlyphs" fill={colors.brandPrimary}>
      Crunchy Home Creations
    </text>
  </svg>
)

export default () => (
  <div css={svg} >
    <Logo />
  </div>
)

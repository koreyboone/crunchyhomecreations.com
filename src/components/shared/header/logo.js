/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import { colors } from '../../../utils/styles'

const svg = css`
  display: inline-block;
  height: 48px;
`

const logoContainer = css`
  display: inline-block;
  height: 48px;
  display: flex;
  align-items: center;
`

const Monogram = () => (
  <svg
    viewBox="0 0 512 512"
    css={css`
      display: inline-block;
      margin-right: 10px;
      height: 28px;
    `}
  >
    <path
      fill={colors.brandPrimary}
      d="M 233.00,0.21
           C 233.00,0.21 212.00,3.25 212.00,3.25
             187.46,7.51 163.30,15.22 141.00,26.37
             76.50,58.62 28.76,116.76 9.14,186.00
             4.96,200.75 0.02,225.87 0.00,241.00
             0.00,241.00 0.00,271.00 0.00,271.00
             0.03,288.73 6.81,321.11 12.69,338.00
             40.51,417.79 102.39,478.83 184.00,502.29
             198.58,506.48 224.06,511.82 239.00,512.00
             239.00,512.00 271.00,512.00 271.00,512.00
             277.67,511.99 284.40,511.05 291.00,510.13
             324.07,505.54 355.00,495.17 384.00,478.57
             410.03,463.68 434.57,443.19 453.58,420.00
             473.77,395.35 490.28,366.45 499.97,336.00
             527.68,248.91 508.42,152.19 446.83,84.00
             423.54,58.21 395.38,37.94 364.00,23.22
             338.61,11.31 299.08,0.04 271.00,0.21
             271.00,0.21 233.00,0.21 233.00,0.21 Z
           M 390.00,68.00
           C 390.00,68.00 398.00,69.00 398.00,69.00
             398.00,69.00 389.34,95.00 389.34,95.00
             389.34,95.00 370.81,147.00 370.81,147.00
             370.81,147.00 365.42,162.00 365.42,162.00
             365.42,162.00 362.30,168.01 362.30,168.01
             362.30,168.01 356.00,169.00 356.00,169.00
             359.02,156.72 359.14,141.64 359.00,129.00
             358.90,120.70 356.58,112.32 352.68,105.00
             336.07,73.86 291.95,64.87 260.00,72.89
             250.78,75.21 242.04,79.19 234.00,84.23
             209.41,99.63 190.90,122.14 175.00,146.00
             155.68,175.00 138.33,215.72 127.66,249.00
             116.59,283.49 107.83,319.60 108.00,356.00
             108.03,362.29 109.73,374.96 111.43,381.00
             113.42,388.09 116.17,394.74 120.06,401.00
             133.81,423.09 161.77,433.96 187.00,434.00
             187.00,434.00 202.00,434.00 202.00,434.00
             233.20,433.63 266.61,410.60 285.33,387.00
             290.64,380.32 295.16,373.21 299.68,366.00
             301.06,363.80 303.95,358.15 306.21,357.23
             308.57,356.28 311.00,357.94 313.00,359.00
             297.14,391.97 271.92,418.60 238.00,433.13
             226.53,438.04 209.47,440.98 197.00,441.00
             162.78,441.05 132.20,434.02 107.09,408.91
             75.74,377.56 68.93,331.26 69.00,289.00
             69.04,264.39 75.93,239.68 85.00,217.00
             106.84,162.40 150.65,114.89 202.00,86.70
             230.55,71.02 256.23,62.62 289.00,63.00
             307.55,63.22 325.87,69.17 343.00,75.86
             356.49,81.04 372.80,88.75 384.70,75.86
             386.98,73.45 388.48,70.95 390.00,68.00 Z
           M 278.00,205.00
           C 278.00,205.00 264.50,208.60 264.50,208.60
             264.50,208.60 258.95,221.00 258.95,221.00
             258.95,221.00 249.00,249.00 249.00,249.00
             249.00,249.00 282.00,249.00 282.00,249.00
             291.93,248.93 290.96,245.27 294.42,236.00
             294.42,236.00 305.00,207.00 305.00,207.00
             305.00,207.00 291.00,207.00 291.00,207.00
             291.00,207.00 291.00,205.00 291.00,205.00
             291.00,205.00 330.00,205.00 330.00,205.00
             330.00,205.00 330.00,207.00 330.00,207.00
             330.00,207.00 316.00,207.00 316.00,207.00
             316.00,207.00 303.05,245.00 303.05,245.00
             303.05,245.00 285.00,294.00 285.00,294.00
             285.00,294.00 300.00,294.00 300.00,294.00
             300.00,294.00 300.00,296.00 300.00,296.00
             300.00,296.00 260.00,296.00 260.00,296.00
             260.00,296.00 260.00,294.00 260.00,294.00
             260.00,294.00 272.58,292.98 272.58,292.98
             272.58,292.98 277.81,282.00 277.81,282.00
             277.81,282.00 289.00,250.00 289.00,250.00
             289.00,250.00 256.00,250.00 256.00,250.00
             256.00,250.00 248.70,251.60 248.70,251.60
             248.70,251.60 243.81,263.00 243.81,263.00
             243.81,263.00 233.00,294.00 233.00,294.00
             233.00,294.00 247.00,294.00 247.00,294.00
             247.00,294.00 247.00,296.00 247.00,296.00
             247.00,296.00 207.00,296.00 207.00,296.00
             207.00,296.00 220.35,292.40 220.35,292.40
             220.35,292.40 224.33,284.00 224.33,284.00
             224.33,284.00 230.34,267.00 230.34,267.00
             230.34,267.00 242.31,234.00 242.31,234.00
             242.31,234.00 252.00,207.00 252.00,207.00
             252.00,207.00 238.00,207.00 238.00,207.00
             238.00,207.00 238.00,205.00 238.00,205.00
             238.00,205.00 278.00,205.00 278.00,205.00 Z
           M 430.00,207.00
           C 430.01,211.81 423.76,230.18 420.23,233.00
             420.53,228.95 421.45,225.08 420.23,221.00
             417.83,210.07 404.87,205.72 395.00,209.11
             388.59,211.30 382.64,216.76 378.52,222.00
             368.09,235.23 358.69,260.09 358.04,277.00
             357.39,293.86 372.57,303.46 388.00,297.53
             399.61,293.07 401.17,287.46 408.00,279.00
             408.26,284.65 404.88,288.17 400.98,291.96
             390.10,302.55 372.35,304.46 360.04,295.07
             351.21,288.34 348.11,276.64 348.00,266.00
             347.74,240.02 367.13,214.76 392.00,207.44
             397.09,205.94 402.77,205.52 408.00,206.46
             412.21,207.22 420.17,210.82 423.00,210.51
             425.46,210.23 427.94,208.31 430.00,207.00 Z
           M 291.00,207.00
           C 291.00,207.00 291.00,208.00 291.00,208.00
             291.00,208.00 290.00,207.00 290.00,207.00
             290.00,207.00 291.00,207.00 291.00,207.00 Z
           M 306.00,355.00
           C 306.00,355.00 306.00,356.00 306.00,356.00
             306.00,356.00 305.00,355.00 305.00,355.00
             305.00,355.00 306.00,355.00 306.00,355.00 Z"
    />
  </svg>
)

const Logo = () => (
  <svg viewBox="0 0 130 28" css={svg}>
    <text
      x="0"
      y="20"
      textLength="130"
      lengthAdjust="spacingAndGlyphs"
      fill={colors.brandPrimary}
    >
      Crunchy Home Creations
    </text>
  </svg>
)

export default () => (
  <div css={logoContainer}>
    <Monogram />
    <Logo />
  </div>
)

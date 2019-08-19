import React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'

import Layout from '../components/shared/layout'
import Store from '../components/store/store'
import { fonts, spacing, colors, radius } from '../utils/styles'
import { Text } from '../components/shared/typography'
import Hand from '../components/store/hand'

const GreetingContainer = styled.header`
  display: flex;
  flex-direction: column;
  max-width: 40em;
  margin: 0px auto;
  padding: ${spacing['lg']}px;
`

const Headline = styled.h1`
  color: ${colors.brandPrimary};
  font-family: ${fonts.heading};
  text-align: center;
  font-size: 2.4rem;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 16px 0px 0px;

  @media (min-width: 1000px) {
    font-size: 3rem;
  }
`

const textStyles = css`
  text-align: center;
  @media (min-width: 1000px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`

const CallToActionContainer = styled.div`
  background: ${colors.lightest};
  border-radius: ${radius.large}px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  padding: ${spacing.sm}px;
  margin: 1.2rem 0 0;
`

const CallToAction = styled(Text)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  font-weight: 500;
  font-size: 0.8rem;
  margin: 0;
  margin-left: 1.5em;

  @media (min-width: 500px) {
    font-size: 1rem;
    margin-left: 2em;
  }
`

const PromoCode = styled.b`
  color: ${colors.brandSecondaryLight};
  margin-right: 4px;
  margin-left: 4px;
`

const handHop = keyframes`
  0% {
    transform: translateY(0) scale(1.2);
  }
  50% {
    transform: translateY(-40%) scale(1.2);
  }
  100% {
    transform: translateY(0) scale(1.2);
  }
`

const HandBox = styled.span`
  transform: rotate(90deg);

  margin-left: 5px;
  svg {
    animation: ${handHop} 3s ease infinite;
  }
`

const Discount = styled.b`
  margin-right: 4px;
  margin-left: 4px;
`

const IndexPage = (props) => (
  <Layout location={props.location}>
    <GreetingContainer>
      <Headline>The Crunchy Store!</Headline>
      <Text css={textStyles}>
        Welcome to the Crunchy Home Creations store, where we strive to be your one-stop shop for all your natural, hand-crafted needs.
      </Text>
      <CallToActionContainer>
        <HandBox>
          <Hand />
        </HandBox>
        <CallToAction>
          Use promo code <PromoCode>1STTIMEBUYER</PromoCode> to get{' '}
          <Discount>10%</Discount>
          off your first purchase!
        </CallToAction>
      </CallToActionContainer>
    </GreetingContainer>
    <Store />
  </Layout>
)

export default IndexPage

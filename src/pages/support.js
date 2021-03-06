import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints, spacing } from '../utils/styles'
import { Heading, BackToProductsLink } from '../components/shared/typography'

const Container = styled.div`
  padding: ${spacing.lg}px ${spacing.sm}px;
  max-width: ${breakpoints.desktop}px;
  margin-bottom: ${spacing['2xl']}px;

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 0.75rem;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    width: ${breakpoints.desktop}px;
    margin: 0 auto;
    margin-bottom: ${spacing['2xl']}px;
  }
`

const Details = styled.details`
  margin-bottom: 1rem;
`

const Summary = styled.summary`
  font-weight: bold;
`

const Support = () => (
  <Container>
    <BackToProductsLink to="/">
      ← &nbsp; Back to Product Listing
    </BackToProductsLink>
    <Heading>FAQs</Heading>
    <Details>
      <Summary>Why won't my credit card work?</Summary>
      <p>
        Please make sure the card isn't frozen or otherwise blocked by your
        financial institution. If it's not that, please{' '}
        <Link to="/contact">send us an email</Link>{' '}if you're unable to pay
        with your credit card.
      </p>
    </Details>

    <Details>
      <Summary>
        I've been waiting for my package, but it hasn't arrived yet.
      </Summary>
      <p>
        Tracking updates may not always show up in real time on your tracking
        link. If you still have not received your order at the end of 6 weeks,
        please let us know by <Link to="/contact">sending us an email</Link>,
        and we'll see how we can help!
      </p>
    </Details>

    <Heading>More FAQs</Heading>
    <Details>
      <Summary>Will you do custom cup orders?</Summary>
      <p>
        Yes, we will work with you directly on design and development. Please
        let us know if you are interested in a custom order by{' '}
        <Link to="/contact">sending us an email</Link>, and we'll see how we can
        help!
      </p>
    </Details>
    <Details>
      <Summary>Will you do custom shirt orders?</Summary>
      <p>
        Yes, we will work with you directly on design and development. Please
        let us know if you are interested in a custom order by{' '}
        <Link to="/contact">sending us an email</Link>, and we'll see how we can
        help!
      </p>
    </Details>
    <Details>
      <Summary>Will you do custom vinyl orders?</Summary>
      <p>
        Yes, we will work with you directly on design and development. Please
        let us know if you are interested in a custom order by{' '}
        <Link to="/contact">sending us an email</Link>, and we'll see how we can
        help!
      </p>
    </Details>
  </Container>
)

export default Support

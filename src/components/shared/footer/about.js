import React from 'react'
import styled from '@emotion/styled'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { Subheading, Text } from '../../shared/typography'
import { colors, breakpoints, link, pullHeadline } from '../../../utils/styles'

const About = styled.div`
  position: relative;
`
const Headline = styled.h2`
  ${pullHeadline};
  /* stylelint-disable */
  color: ${colors.brandPrimary};
  /* stylelint-enable */
  font-size: 1.75rem;
`

const Content = styled.div`
  @media (min-width: ${breakpoints.hd}px) {
    padding-top: 4rem;
  }
`
const Link = styled(OutboundLink)`
  ${link};
`

export default () => (
  <About>
    <Headline>About Crunchy Home Creations</Headline>
    <Content>
      <Text>
        Founded by Kristi and Korey Boone, Crunchy Home Creations seeks to
        provide high-quality custom made items. From running gear, to holistic
        tonics and syrups, our products are sure to please, or your money back
        guaranteed.
      </Text>
      <Subheading>Questions or concerns?</Subheading>
      <Text>
        Visit us on{' '}
        <Link href="https://www.facebook.com/Crunchy-Home-Creations-335705617180868/">
          facebook
        </Link>{' '}
        or send an email to{' '}
        <Link href="mailto:support@crunchyhomecreations.com">
          support@crunchyhomecreations.com
        </Link>
      </Text>
    </Content>
  </About>
)

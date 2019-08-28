import React from 'react'
import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { Text, Headline } from '../../shared/typography'
import { colors, breakpoints, link, fonts } from '../../../utils/styles'

const About = styled.div`
  position: relative;
`

const Subheading = styled.h3`
  color: ${colors.darkest};
  font-family: ${fonts.heading};
  font-size: 1.125rem;
  margin: 1.5rem 0 0;
`

const Content = styled.div`
  @media (min-width: ${breakpoints.hd}px) {
    padding-top: 4rem;
  }
`
const ExternalLink = styled(OutboundLink)`
  ${link};
`

const Link = styled(GatsbyLink)`
  ${link};
`

export default () => (
  <About>
    <Headline>About Crunchy Home Creations</Headline>
    <Content>
      <Text>
        Founded by Kristi Boone, Crunchy Home Creations seeks to provide
        high-quality custom made items. From tumblers and wine glasses to
        holistic tonics and syrups, our products are sure to please or your
        money back guaranteed.
      </Text>
      <Subheading>Questions or concerns?</Subheading>
      <Text>
        Visit us on{' '}
        <ExternalLink
          rel="noopener noreferrer"
          href="https://www.facebook.com/Crunchy-Home-Creations-335705617180868/">
          facebook
        </ExternalLink>{' '}
        or <Link to="/contact">Contact Us</Link>
      </Text>
    </Content>
  </About>
)

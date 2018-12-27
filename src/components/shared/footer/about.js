import React from 'react'
import styled from '@emotion/styled'
import { Subheading, Text } from '../../shared/Typography'
import { colors, breakpoints, link, pullHeadline } from '../../../utils/styles'

const About = styled.div`
  position: relative;
`
const Headline = styled.h2`
  ${pullHeadline};
  color: ${colors.brandPrimary};
`
const Content = styled.div`
  @media (min-width: ${breakpoints.hd}px) {
    padding-top: 4rem;
  }
`
const Link = styled.a`
  ${link};
`

export default () => (
  <About>
    <Headline>About Crunchy Home Creations</Headline>
    <Content>
      <Text>
        Founded by Kristi and Korey Boone, Crunchy Home Creations seeks to
        provide high-quality custom-made items. Founded by Kristi and Korey
        Boone, Crunchy Home Creations seeks to provide high-quality custom-made
        items.
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

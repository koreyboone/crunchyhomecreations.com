import React from 'react'
import styled from '@emotion/styled'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import metaball from './metaball.svg'
import { colors, spacing, link } from '../../../utils/styles'

import About from './about'

const FooterContainer = styled.footer`
  background: url(${metaball});
  background-position: 50% 0;
  background-repeat: no-repeat;
  padding: ${spacing.sm}px;
  padding-top: ${spacing.lg}px;
`

const Footer = styled.div`
  margin: 0 auto;
  max-width: 600px;
`
const Legal = styled.p`
  color: ${colors.brandLighter};
  font-size: 0.875rem;
  margin-bottom: ${spacing['2xl'] * 2}px;
  margin-top: ${spacing['2xl'] * 3}px;
`

const Link = styled(OutboundLink)`
  ${link}
`

export default () => (
  <FooterContainer>
    <Footer>
      <About />
      <Legal>
        Built with{' '}
        <span role="img" aria-label="love">
          💙
        </span>{' '}
        by <Link href="https://github.com/koreyboone">@koreyboone</Link> ·{' '}
        <Link href="https://github.com/koreyboone/crunchyhomecreations.com">
          See the source code on GitHub
        </Link>
      </Legal>
    </Footer>
  </FooterContainer>
)

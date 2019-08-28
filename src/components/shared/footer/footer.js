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
`

const Footer = styled.div`
  margin: 0 auto;
  max-width: 600px;
`
const Legal = styled.p`
  color: ${colors.brandLighter};
  font-size: 0.875rem;
  margin-top: ${spacing['2xl']}px;
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
        by{' '}
        <Link rel="noopener noreferrer" href="https://github.com/koreyboone">
          @koreyboone
        </Link>{' '}
        ·{' '}
        <Link
          rel="noopener noreferrer"
          href="https://github.com/koreyboone/crunchyhomecreations.com">
          See the source code on GitHub
        </Link>
      </Legal>
    </Footer>
  </FooterContainer>
)

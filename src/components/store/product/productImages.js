import React, { useState } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Image from 'gatsby-image'

import { spacing, radius, colors } from '../../../utils/styles'

const ImageContainer = styled.div`
  display: flex;

  > .gatsby-image-outer-wrapper {
    flex: 5 100%;
    width: 100%;
  }

  .gatsby-image-wrapper {
    width: 100%;
  }
`

const PreviewWrapper = styled.div`
  display: flex;
  margin-top: ${spacing.xs}px;
`

const ImageLink = styled.a`
  border: 2px solid transparent;
  border-radius: ${radius.default}px;
  box-sizing: border-box;
  display: block;
  flex: 1 40px;
  margin-right: ${spacing['3xs']}px;
  max-width: 40px;
  text-decoration: none;
  transition: 200ms border-color linear;

  img {
    border-radius: 1px;
  }

  &:focus,
  &:hover {
    background: ${colors.accent};
    border-color: ${colors.accent};
  }
`

const selectedImage = css`
  background: ${colors.accent};
  border-color: ${colors.accent};
`

export default ({ alt, images }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const currentImage = images[imageIndex]

  if (!currentImage) {
    return
  }

  let handleImageClick = (e, index) => {
    e.preventDefault()
    setImageIndex(index)
  }

  return (
    <>
      <ImageContainer>
        <Image fluid={currentImage.localFile.childImageSharp.fluid} alt={alt} />
      </ImageContainer>
      <PreviewWrapper>
        {images.map((image, index) => {
          return (
            <ImageLink
              key={image.id}
              css={index === imageIndex ? selectedImage : ''}
              onClick={e => handleImageClick(e, index)}
              href={image.localFile.childImageSharp.fluid.src}
            >
              <Image fluid={image.localFile.childImageSharp.fluid} alt={alt} />
            </ImageLink>
          )
        })}
      </PreviewWrapper>
    </>
  )
}

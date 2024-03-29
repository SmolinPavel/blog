import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useTheme } from 'hooks'
import { ReactComponent as ArticleWrapper } from 'assets/articleWrapper.svg'
import { Date, Canvas, Image, Teaser, Title, Wrapper } from './styled'

const StyledArticleWrapper = styled(ArticleWrapper)`
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`

const Article = ({ src, withBorder }) => {
  const { isDarkMode } = useTheme()
  return (
    <Wrapper>
      <Link to="/test">
        <Canvas>
          <Image src={src} />
          {withBorder && !isDarkMode && (
            <StyledArticleWrapper
              style={{ position: 'absolute', left: '0', top: '0' }}
            />
          )}
        </Canvas>
      </Link>
      <Date>15.12.2019</Date>
      <Title>
        <Link to="/test">Честное мнение о сериале</Link>
      </Title>
      <Teaser>Сериал конечно о чень смешной и местами даже досто...</Teaser>
    </Wrapper>
  )
}

export default Article

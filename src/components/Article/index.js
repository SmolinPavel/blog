import React from 'react'

import { useTheme } from 'hooks'
import { ReactComponent as ArticleWrapper } from 'assets/articleWrapper.svg'
import { Canvas, Image, Wrapper } from './styled'

const Article = ({ src, withBorder }) => {
  const { isDarkMode } = useTheme()
  return (
    <Wrapper>
      <Canvas>
        <Image src={src} />
        {withBorder && !isDarkMode && (
          <ArticleWrapper style={{ position: 'absolute', left: '0' }} />
        )}
      </Canvas>
    </Wrapper>
  )
}

export default Article

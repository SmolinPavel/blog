import React from 'react'

import { Articles, ContentWrapper, Title, Wrapper } from './styled'
import Article from 'components/Article'
import ReadMore from 'components/ReadMore'
import Typography from 'components/Typography'

const ArticleList = () => (
  <Wrapper>
    <Title>
      <Typography size="1.25rem" tag="h3" weight="600">
        Свежее
      </Typography>
    </Title>
    <ContentWrapper>
      <Articles>
        <Article src="/episode.png" />
        <Article src="/cat.jpg" withBorder />
      </Articles>
      <ReadMore />
    </ContentWrapper>
  </Wrapper>
)

export default ArticleList

import React from 'react'

import { BannerMessage, CallToAction, InnerWrapper, Wrapper } from './styled'

const Banner = ({ children }) => (
  <Wrapper>
    <InnerWrapper>
      <BannerMessage>{children}</BannerMessage>
      <CallToAction>Исправить ситуацию</CallToAction>
    </InnerWrapper>
  </Wrapper>
)

export default Banner

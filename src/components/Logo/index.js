import React from 'react'

import { useTheme } from 'hooks'
import { LogoWrapper, SubTitle, Title, Wrapper } from './styled'
import Toggle from 'components/Toggle'

const Logo = () => {
  const { toggleTheme, theme } = useTheme()

  return (
    <Wrapper>
      <LogoWrapper>
        <Title>Блог Паши Смолина</Title>
        <SubTitle>О программировании</SubTitle>
      </LogoWrapper>
      <Toggle onChange={toggleTheme} type="checkbox" value={theme} />
    </Wrapper>
  )
}

export default Logo

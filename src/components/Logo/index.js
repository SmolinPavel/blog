import React from 'react'

import { useTheme } from 'hooks'
import { LogoWrapper, SubTitle, Title, Wrapper } from './styled'
import DarkModeToggle from 'components/DarkModeToggle'

const Logo = () => {
  const { toggleTheme, theme } = useTheme()

  return (
    <Wrapper>
      <LogoWrapper>
        <Title>Блог Паши Смолина</Title>
        <SubTitle>О программировании</SubTitle>
      </LogoWrapper>
      <DarkModeToggle onChange={toggleTheme} type="checkbox" value={theme} />
    </Wrapper>
  )
}

export default Logo

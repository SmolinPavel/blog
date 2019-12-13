import React from 'react'

import { Wrapper } from './styled'

import Logo from 'components/Logo'
import Navigation from 'components/Navigation'
import Search from 'components/Search'

const links = [
  {
    label: 'Main',
    to: '/',
  },
  { label: 'Articles', to: '/articles' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contacts', to: '/contacts' },
  { label: 'About', to: '/about' },
]

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <Navigation links={links} />
      <Search />
    </Wrapper>
  )
}
export default Header

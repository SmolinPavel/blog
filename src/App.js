import React from 'react'

import AppWrapper from 'components/AppWrapper'
import AppProviders from 'providers'
import Footer from 'components/Footer'
import GlobalStyle from 'components/GlobalStyle'
import Header from 'components/Header'
import Router from 'Routes'

function App() {
  return (
    <AppWrapper>
      <AppProviders>
        <GlobalStyle />
        <Header />
        <Router />
        <Footer />
      </AppProviders>
    </AppWrapper>
  )
}

export default App

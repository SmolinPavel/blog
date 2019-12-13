import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import ThemeProvider from './themeProvider'

const AppProviders = ({ children }) => (
  <ThemeProvider>
    <Router>{children}</Router>
  </ThemeProvider>
)

export default AppProviders

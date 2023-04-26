import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

import { ErrorBoundary } from '../ErrorBoundary'
import { Header } from '../Header'
import { HomeCCPage } from './../../pages/HomeCC'
import { HomeFCPage } from './../../pages/HomeFC/index'
import SettingPage from '../../pages/Settings'

import { AppWrapper, AppContainer } from './styled.js'
import { Global } from '../../constants/globalStyle'
import { themes } from '../../constants/themes'

function App() {
  const selectedTheme = useSelector((state) => state.selectedTheme)
  const themeName = selectedTheme.selectedTheme || Object.keys(themes)[0]
  const theme = themes[themeName]

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Global />
        <AppWrapper>
          <AppContainer>
            <Header />
            <Routes>
              <Route path='/' element={<HomeCCPage />} />
              <Route path='/fc' element={<HomeFCPage />} />
              <Route path='/settings' element={<SettingPage />} />
            </Routes>
          </AppContainer>
        </AppWrapper>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export { App }

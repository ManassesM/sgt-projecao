import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'styled-components'

import { Header } from '../HOC/Header'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import UserFormProvider from 'context/UserFormContext'
import AuthProvider from 'context/AuthContext'

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <SessionProvider session={session}>
      <AuthProvider>
        <UserFormProvider>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyle />
          </ThemeProvider>
        </UserFormProvider>
      </AuthProvider>
    </SessionProvider>
  )
}

export default Header(MyApp)

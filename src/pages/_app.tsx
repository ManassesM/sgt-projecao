import ToggleFormProvider from 'context/FormContext'
import TasksProvider from 'context/TasksContext'
import UserProvider from 'context/UserContext'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Header } from '../HOC/Header'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <SessionProvider session={session}>
      <TasksProvider>
        <UserProvider>
          <ToggleFormProvider>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
              <GlobalStyle />
            </ThemeProvider>
          </ToggleFormProvider>
        </UserProvider>
      </TasksProvider>
    </SessionProvider>
  )
}

export default Header(MyApp)

import TasksProvider from 'context/TasksContext'
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
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />

          <GlobalStyle />
        </ThemeProvider>
      </TasksProvider>
    </SessionProvider>
  )
}

export default Header(MyApp)

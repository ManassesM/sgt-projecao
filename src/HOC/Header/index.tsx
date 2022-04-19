import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'
import { signOut } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import faviconLogo from '../../assets/logo.svg'
import * as S from './styles'

const HOCHeader = () => {
  const { route } = useRouter()

  function handleSignOut() {
    signOut({ callbackUrl: '/login' })
  }

  return (
    <>
      <Head>
        <title>SGT</title>
        <link rel="icon" href={faviconLogo} />
      </Head>
      <S.Bar>
        <AssignmentTurnedInIcon sx={{ fontSize: 55 }} />
        <S.Logo>
          <p>Sistema de</p>
          <p>Gerenciamento de</p>
          <p>Tarefas</p>
        </S.Logo>
        {route !== '/login' && (
          <S.Logout sx={{ fontSize: 35 }} onClick={handleSignOut} />
        )}
      </S.Bar>
    </>
  )
}

export const Header = (Component: React.ComponentType<any>) => {
  const MyComponent = (props: any) => (
    <>
      <HOCHeader />
      <Component {...props} />
    </>
  )
  return MyComponent
}

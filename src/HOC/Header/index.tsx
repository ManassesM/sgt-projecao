import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'
import LogoutIcon from '@mui/icons-material/Logout'
import { getSession, signOut } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import faviconLogo from '../../assets/logo.svg'
import * as S from './styles'

type User = {
  id?: string
  name?: string
  email?: string
  image?: string | null
}

const HOCHeader = () => {
  const [dropDown, setDropDown] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const { route } = useRouter()

  function handleSignOut() {
    signOut({ callbackUrl: '/' })
  }

  useEffect(() => {
    getSession().then(data => data && setUser(data?.user))
  }, [])

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
        {route === '/app' && (
          <S.User>
            <S.UserProps>
              <p>{user?.name}</p>
              <img
                src={user?.image}
                alt="menu de usuário"
                onClick={() => setDropDown(!dropDown)}
              />
            </S.UserProps>

            {dropDown && (
              <S.Dropdown onClick={handleSignOut}>
                <LogoutIcon sx={{ fontSize: 25 }} />
                Sair
              </S.Dropdown>
            )}
          </S.User>
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

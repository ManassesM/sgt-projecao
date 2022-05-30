import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'
import LogoutIcon from '@mui/icons-material/Logout'
import { getSession, signOut } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import React, { MouseEvent, useEffect, useState } from 'react'

import faviconLogo from '../../assets/logo.svg'

import { Popover } from '@mui/material'

import * as S from './styles'

type User = {
  id?: string
  name?: string
  email?: string
  image?: string | null
}

const HOCHeader = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)

  const [user, setUser] = useState<User | null>(null)

  const { route } = useRouter()

  function handleSignOut() {
    signOut({ callbackUrl: '/' })
  }

  useEffect(() => {
    getSession().then(data => data && setUser(data?.user))
  }, [])

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
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
        {route === '/app' && (
          <S.User>
            <S.UserProps onClick={handleClick}>
              <p>{user?.name}</p>
              <img
                src={user?.image}
                alt="menu de usuário"
                onClick={handleClick}
              />
            </S.UserProps>
            <Popover
              sx={{ top: '5px' }}
              open={!!anchorEl}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <S.Dropdown onClick={handleSignOut}>
                <LogoutIcon sx={{ fontSize: 25 }} />
                Sair
              </S.Dropdown>
            </Popover>

            {/* {dropDown && (
              <S.Dropdown onClick={handleSignOut}>
                <LogoutIcon sx={{ fontSize: 25 }} />
                Sair
              </S.Dropdown>
            )} */}
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

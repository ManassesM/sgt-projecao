import { useEffect } from 'react'

import { NextPage } from 'next'
import { getProviders } from 'next-auth/react'
import Router from 'next/router'

import nookies from 'nookies'

import GoogleIcon from '@mui/icons-material/Google'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import PersonIcon from '@mui/icons-material/Person'

import { Container } from 'layout/Container'
import { BtnWrapper } from 'layout/BtnWrapper'
import { BoxLogin } from 'layout/BoxLogin'

import BtnLogin from 'components/BtnLogin'

import { useUserForm } from 'context/UserFormContext'
import UsersForm from 'containers/Forms/UserForm'

const Login: NextPage<any> = ({ props }) => {
  const { google, github, facebook } = props.providers
  const { open } = useUserForm()

  const cookies = props.cookies
  const hasToken = cookies['next-auth.session-token'] || cookies['sgt.token']

  useEffect(() => {
    hasToken && Router.push('/')
  }, [])

  return (
    <Container>
      <BoxLogin>
        {!open ? (
          <>
            <p>Entre ou crie uma conta gratuita</p>
            <BtnWrapper>
              <GoogleIcon />
              <BtnLogin provider={google} />
            </BtnWrapper>
            <BtnWrapper>
              <GitHubIcon />
              <BtnLogin provider={github} />
            </BtnWrapper>
            <BtnWrapper>
              <FacebookIcon />
              <BtnLogin provider={facebook} />
            </BtnWrapper>
            <BtnWrapper>
              <PersonIcon />
              <BtnLogin />
            </BtnWrapper>
          </>
        ) : (
          <UsersForm />
        )}
      </BoxLogin>
    </Container>
  )
}

Login.getInitialProps = async context => {
  return {
    props: {
      providers: await getProviders(),
      cookies: nookies.get(context)
    }
  }
}

export default Login

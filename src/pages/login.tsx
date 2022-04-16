import { NextPage } from 'next'
import { getProviders, getSession } from 'next-auth/react'

import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'

import { Container } from '../layout/Container'
import { BtnWrapper } from '../layout/BtnWrapper'
import { BoxLogin } from '../layout/BoxLogin'

import BtnLogin from '../components/BtnLogin'

const Login: NextPage<any> = props => {
  const githubProvider = props.props.providers.github
  const facebookProvider = props.props.providers.facebook

  return (
    <Container>
      <BoxLogin>
        <p>Entre ou crie uma conta gratuita</p>
        <BtnWrapper>
          <GitHubIcon />
          <BtnLogin provider={githubProvider} />
        </BtnWrapper>
        <BtnWrapper>
          <FacebookIcon />
          <BtnLogin provider={facebookProvider} />
        </BtnWrapper>
      </BoxLogin>
    </Container>
  )
}

Login.getInitialProps = async () => {
  return {
    props: {
      providers: await getProviders(),
      session: await getSession()
    }
  }
}

export default Login

import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'
import PersonIcon from '@mui/icons-material/Person'
import BtnLogin from 'components/BtnLogin'
import UsersForm from 'containers/Forms/UserForm'
import { useUserForm } from 'context/UserFormContext'
import { BoxLogin } from 'layout/BoxLogin'
import { BtnWrapper } from 'layout/BtnWrapper'
import { Container } from 'layout/Container'
import { NextPage } from 'next'
import { getProviders, getSession } from 'next-auth/react'

const Login: NextPage<any> = ({ props }) => {
  const { google, github, facebook } = props.providers
  const { open } = useUserForm()

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

Login.getInitialProps = async ({ req, res }) => {
  const session = await getSession({ req })

  if (session) {
    res.writeHead(301, { Location: '/app' })
    res.end()
  } else {
    return {
      props: {
        providers: await getProviders()
      }
    }
  }
}

export default Login

import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'
import BtnLogin from 'components/BtnLogin'
import { Box } from 'layout/Box'
import { Btn } from 'layout/Btn'
import { Container } from 'layout/Container'
import { NextPage } from 'next'
import { getProviders, getSession } from 'next-auth/react'

const Login: NextPage<unknown> = ({ props }) => {
  const { google, github, facebook } = props.providers

  return (
    <Container>
      <Box>
        <>
          <p>Entre ou crie uma conta gratuita</p>
          <Btn>
            <GoogleIcon />
            <BtnLogin provider={google} />
          </Btn>
          <Btn>
            <GitHubIcon />
            <BtnLogin provider={github} />
          </Btn>
          <Btn>
            <FacebookIcon />
            <BtnLogin provider={facebook} />
          </Btn>
        </>
      </Box>
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

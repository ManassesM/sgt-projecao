import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

import nookies from 'nookies'

const Home: React.FC<any> = props => {
  console.log(props)

  return (
    <div>
      <main>
        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context)
  const cookies = nookies.get(context)

  const googleToken = cookies['next-auth.session-token']
  const sgtToken = cookies['sgt.token']

  const hasToken = googleToken || sgtToken

  if (!hasToken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  } else {
    return {
      props: {
        session,
        token: {
          google: googleToken || '',
          sgt: sgtToken || ''
        }
      }
    }
  }
}

export default Home

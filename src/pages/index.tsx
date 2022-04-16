import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'

import faviconLogo from '../assets/logo.svg'

const Home: React.FC = session => {
  console.log('session ', session)

  return (
    <div>
      <Head>
        <title>SGT</title>
        <link rel="icon" href={faviconLogo} />
      </Head>

      <main>
        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context)
  if (!session)
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }

  return {
    props: { session }
  }
}

export default Home

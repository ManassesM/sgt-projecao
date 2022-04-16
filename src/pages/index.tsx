import Head from 'next/head'

import faviconLogo from '../assets/logo.svg'

const Home: React.FC = () => {
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

export default Home

import NextAuth from 'next-auth'

import GithubProvider from 'next-auth/providers/github'
import FacebookProvider from 'next-auth/providers/facebook'

export default NextAuth({
  session: {
    jwt: true
  },
  providers: [
    GithubProvider({
      clientId: process.env.GUTHUB_CLIENT_ID,
      clientSecret: process.env.GUTHUB_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
  ],

  pages: {
    signIn: '/login'
  },

  database: process.env.DATABASE_URL
})

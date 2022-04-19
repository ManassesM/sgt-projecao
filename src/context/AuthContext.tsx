import Router from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import { createContext, useContext, useEffect, useState } from 'react'
import { recoverUserInformation, signInRequest } from 'services/auth'


type User = {
  name: string
  email: string
  avatar_url: string
}

type SignInData = {
  email: string
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User
  signIn: (_: SignInData) => Promise<void>
}

const AuthContext = createContext({} as AuthContextType)

export default function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user

  useEffect(() => {
    const { 'sgt.token': token } = parseCookies()

    if (token) {
      recoverUserInformation().then(res => setUser(res.user))
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    // CALL API
    const { token, user } = await signInRequest({
      email,
      password
    })

    setCookie(undefined, 'sgt.token', token, {
      maxAge: 60 * 60 * 1 // 1 hour
    })

    setUser(user)

    Router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const { isAuthenticated, signIn, user } = useContext(AuthContext)

  return { isAuthenticated, signIn, user }
}

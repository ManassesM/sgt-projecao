import { User } from '@prisma/client'
import { createContext, ReactNode, useContext, useState } from 'react'

type UserContextType = {
  user: User
  setUser: (_: User) => void
}

type UserProviderType = {
  children: ReactNode
}

const UserContext = createContext({} as UserContextType)

export default function TasksProvider({ children }: UserProviderType) {
  const [user, setUser] = useState<User | null>(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUsers() {
  const { user, setUser } = useContext(UserContext)

  return { user, setUser }
}

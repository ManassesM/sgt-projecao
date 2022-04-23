import { User } from '@prisma/client'
import { createContext, ReactNode, useContext, useState } from 'react'

type UserContextType = {
  users: User[]
  setUsers: (_: User[]) => void
}

type UserProviderType = {
  children: ReactNode
}

const UserContext = createContext({} as UserContextType)

export default function TasksProvider({ children }: UserProviderType) {
  const [users, setUsers] = useState<User[] | null>(null)

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUsers() {
  const { users, setUsers } = useContext(UserContext)

  return { users, setUsers }
}

import { createContext, ReactNode, useContext, useState } from 'react'

type UserFormContextType = {
  open: boolean
  setOpen: (_: boolean) => void
}

type UserFormProviderType = {
  children: ReactNode
}

const UserFormContext = createContext({} as UserFormContextType)

export default function UserFormProvider({ children }: UserFormProviderType) {
  const [open, setOpen] = useState(false)

  return (
    <UserFormContext.Provider value={{ open, setOpen }}>
      {children}
    </UserFormContext.Provider>
  )
}

export function useUserForm() {
  const { open, setOpen } = useContext(UserFormContext)

  return { open, setOpen }
}

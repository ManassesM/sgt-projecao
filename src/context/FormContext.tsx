import { createContext, ReactNode, useContext, useState } from 'react'

type ToggleFormContextType = {
  toggleForm: boolean
  setToggleForm: (_: boolean) => void
}

type ToggleFormProviderType = {
  children: ReactNode
}

const ToggleFormContext = createContext({} as ToggleFormContextType)

export default function ToggleFormProvider({
  children
}: ToggleFormProviderType) {
  const [toggleForm, setToggleForm] = useState<boolean>(false)

  return (
    <ToggleFormContext.Provider value={{ toggleForm, setToggleForm }}>
      {children}
    </ToggleFormContext.Provider>
  )
}

export function useToggleForm() {
  const { toggleForm, setToggleForm } = useContext(ToggleFormContext)

  return { toggleForm, setToggleForm }
}

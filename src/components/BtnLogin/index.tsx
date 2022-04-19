import { useUserForm } from 'context/UserFormContext'
import { AppProvider } from 'next-auth/providers'
import { signIn } from 'next-auth/react'
import * as S from './styles'

type Props = {
  provider?: AppProvider
}

const BtnLogin = ({ provider }: Props) => {
  const { setOpen } = useUserForm()

  return (
    <>
      <S.Button
        onClick={() => (provider?.name ? signIn(provider?.id) : setOpen(true))}
      >
        {`${provider?.name || 'Email & Senha'}`}
      </S.Button>
    </>
  )
}

export default BtnLogin

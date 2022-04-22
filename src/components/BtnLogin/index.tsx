import { AppProvider } from 'next-auth/providers'
import { signIn } from 'next-auth/react'
import * as S from './styles'

type Props = {
  provider?: AppProvider
}

const BtnLogin = ({ provider }: Props) => {
  return (
    <>
      <S.Button onClick={() => signIn(provider?.id)}>
        {`${provider?.name || 'Email & Senha'}`}
      </S.Button>
    </>
  )
}

export default BtnLogin

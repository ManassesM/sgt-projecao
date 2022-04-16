import { signIn } from 'next-auth/react'
import * as S from './styles'

const BtnLogin = ({ provider }) => {
  return (
    <div>
      <S.Button onClick={() => signIn(provider.id)}>
        Entrar com {provider.name}
      </S.Button>
    </div>
  )
}

export default BtnLogin

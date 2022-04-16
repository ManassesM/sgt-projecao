import { useUserForm } from 'context/UserFormContext'
import { useForm } from 'react-hook-form'

import { useAuth } from 'context/AuthContext'

import { FormLabel, Input } from '@mui/material'

import Button from 'components/Button'

import * as S from './styles'

interface IUserFormData {
  email: string
  password: string
}

const UsersForm = () => {
  const { setOpen } = useUserForm()
  const { register, handleSubmit } = useForm<IUserFormData>()
  const { signIn } = useAuth()

  async function handleSignIn(formData: IUserFormData) {
    await signIn(formData)
  }

  return (
    <S.Form onSubmit={handleSubmit(handleSignIn)}>
      <S.LabelWrapper>
        <FormLabel>E-mail</FormLabel>
        <Input type="email" name="email" required {...register('email')} />
      </S.LabelWrapper>
      <S.LabelWrapper>
        <FormLabel>Senha</FormLabel>
        <Input
          type="password"
          name="password"
          required
          {...register('password')}
        />
        <span>nunca compartilhe sua senha</span>
      </S.LabelWrapper>
      <S.BtnWrapper>
        <Button title={'AVANÇAR'} type="submit" />
        <Button title={'VOLTAR'} type="button" onClick={() => setOpen(false)} />
      </S.BtnWrapper>
    </S.Form>
  )
}

export default UsersForm

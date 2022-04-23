import { useToggleForm } from 'context/FormContext'
import { useUsers } from 'context/UserContext'
import React from 'react'
import { useForm } from 'react-hook-form'
import { api } from 'utils/axios'
import * as S from './styles'

type FormProps = {
  title: string
  description: string
  priority: string
}

const Form: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const { setToggleForm } = useToggleForm()
  const { user } = useUsers()

  async function handleFormSubmit(formData: FormProps) {
    const { title, description, priority } = formData

    await api.post('/tasks/create', {
      title,
      description,
      priority,
      user
    })

    setToggleForm(false)
  }

  return (
    <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
      <S.Wrap>
        <S.Label>Título</S.Label>
        <S.Input type="text" name="title" {...register('title')}></S.Input>
      </S.Wrap>
      <S.Wrap>
        <S.Label>Descrição</S.Label>
        <S.TextArea
          rows={5}
          name="description"
          {...register('description')}
        ></S.TextArea>
      </S.Wrap>
      <S.Wrap>
        <S.Label>Prioridade (1-3)</S.Label>
        <S.Input
          type="number"
          name="priority"
          {...register('priority')}
        ></S.Input>
      </S.Wrap>
      <S.WrapBtn>
        <S.Btn>CRIAR</S.Btn>
      </S.WrapBtn>
    </S.Form>
  )
}

export default Form

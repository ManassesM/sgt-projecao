import React from 'react'
import { useForm } from 'react-hook-form'
import * as S from './styles'

type FormProps = {
  title: string
  description: string
  priority: string
}

const Form: React.FC = () => {
  const { register, handleSubmit } = useForm()

  async function handleFormSubmit(formData: FormProps) {
    const { title, description, priority } = formData

    await fetch('http://localhost:3000/tasks/create', {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        priority: Number(priority)
      })
      // headers: { 'Content-Type': 'application/json' }
    })
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

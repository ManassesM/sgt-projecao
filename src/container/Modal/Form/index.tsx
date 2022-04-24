import { yupResolver } from '@hookform/resolvers/yup'
import InputError from 'components/InputError'
import { useToggleForm } from 'context/FormContext'
import { useTask } from 'context/TaskContext'
import { useUsers } from 'context/UserContext'
import React from 'react'
import { useForm } from 'react-hook-form'
import { api } from 'utils/axios'
import { number } from 'utils/validation'
import * as yup from 'yup'
import * as S from './styles'

type FormProps = {
  title: string
  description: string
  priority: number
}

const getDefaultValues = (task: FormProps) => {
  return {
    title: task?.title || '',
    description: task?.description || '',
    priority: task?.priority || 0
  }
}

const Form: React.FC = () => {
  const { task } = useTask()
  const { user } = useUsers()

  const defaultValues = getDefaultValues(task)

  const validationSchema = yup.object({
    title: yup.string().required(),
    description: yup.string(),
    priority: yup.string().matches(number)
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) })
  const { setToggleForm } = useToggleForm()

  async function handleFormSubmit(formData: FormProps) {
    const { title, description, priority } = formData

    task
      ? await api.post('/tasks/update', {
          id: task.id,
          title,
          description,
          priority,
          user
        })
      : await api.post('/tasks/create', {
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
        <S.Label>Título*</S.Label>
        <S.Input type="text" name="title" {...register('title')} />
        {errors?.title?.type && (
          <InputError type={errors.title.type} field="title" />
        )}
      </S.Wrap>
      <S.Wrap>
        <S.Label>Descrição</S.Label>
        <S.TextArea rows={5} name="description" {...register('description')} />
      </S.Wrap>
      <S.Wrap>
        <S.Label>Prioridade (1-3)*</S.Label>
        <S.Input type="number" name="priority" {...register('priority')} />
        {errors?.priority?.type && (
          <InputError type={errors.priority.type} field="priority" />
        )}
      </S.Wrap>
      <S.WrapBtn>
        <S.Btn>{task ? 'EDITAR' : 'CRIAR'}</S.Btn>
      </S.WrapBtn>
    </S.Form>
  )
}

export default Form

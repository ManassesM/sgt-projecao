import { yupResolver } from '@hookform/resolvers/yup'
import InputError from 'components/InputError'
import { useToggleForm } from 'context/FormContext'
import { useTask } from 'context/TaskContext'
import { useTasks } from 'context/TasksContext'
import { useUsers } from 'context/UserContext'
import React from 'react'
import { useForm } from 'react-hook-form'
import { createTask, updateTask } from 'services/task'
import { validationSchema } from 'utils/validation/validation'
import * as S from './styles'

type DefaultValuesProps = {
  title: string
  description: string
  priority: number
}

const getDefaultValues = (task: DefaultValuesProps) => {
  return {
    title: task?.title || '',
    description: task?.description || '',
    priority: task?.priority || 0
  }
}

const Form: React.FC = () => {
  const { task } = useTask()
  const { tasks, setTasks } = useTasks()
  const { user } = useUsers()
  const { setToggleForm } = useToggleForm()

  const defaultValues = getDefaultValues(task)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues, resolver: yupResolver(validationSchema) })

  async function handleFormSubmit(formData: DefaultValuesProps) {
    const { title, description, priority } = formData

    if (task) {
      const upTask = await updateTask({
        id: task.id,
        title,
        description,
        priority,
        user
      })
      setTasks([...upTask])
    } else {
      const createdTask = await createTask({
        title,
        description,
        priority,
        user
      })
      setTasks([...tasks, createdTask])
    }

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

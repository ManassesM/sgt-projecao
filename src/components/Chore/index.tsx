import { Task } from '@prisma/client'
import { useToggleForm } from 'context/FormContext'
import { useTask } from 'context/TaskContext'
import React from 'react'
import { deleteTask } from 'services/task'
import * as S from './styles'

type Props = {
  key: string
  task: Task
}

const Chore: React.FC<Props> = ({ task }) => {
  const { setToggleForm } = useToggleForm()
  const { setTask } = useTask()
  const { id, title, description, priority } = task

  async function handleDelete() {
    await deleteTask(id)
  }

  function handleEdit() {
    setTask(task)
    setToggleForm(true)
  }

  return (
    <S.Container onClick={handleEdit}>
      <S.PriorityIcon priority={priority} />
      <S.Title>
        <p>{title}</p>
      </S.Title>
      <S.Description>
        <span>{description}</span>
      </S.Description>
      <S.BottomIcons>
        <S.PenIcon onClick={handleEdit} />
        <S.TrashIcon onClick={handleDelete} />
      </S.BottomIcons>
    </S.Container>
  )
}

export default Chore

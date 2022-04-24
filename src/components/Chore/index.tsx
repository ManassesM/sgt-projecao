import { Task } from '@prisma/client'
import React from 'react'
import { api } from 'utils/axios'
import * as S from './styles'

type Props = {
  key: string
  task: Task
}
const Chore: React.FC<Props> = ({ task }) => {
  const { id, title, description, priority } = task

  function handleDelete() {
    api.delete(`/tasks/delete?userId=${id}`)
  }

  return (
    <S.Container>
      <S.PriorityIcon priority={priority} />
      <S.Title>
        <p>{title}</p>
      </S.Title>
      <S.Description>
        <span>{description}</span>
      </S.Description>
      <S.TrashIcon onClick={handleDelete} />
    </S.Container>
  )
}

export default Chore

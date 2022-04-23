import CircleIcon from '@mui/icons-material/Circle'
import { Task } from '@prisma/client'
import React from 'react'
import * as S from './styles'

type Props = {
  key: string
  task: Task
}
const Chore: React.FC<Props> = ({ task }) => {
  const { title, description, priority } = task

  return (
    <S.Container priority={priority}>
      <CircleIcon />
      <S.Title>
        <p>{title}</p>
      </S.Title>
      <S.Description>
        <span>{description}</span>
      </S.Description>
    </S.Container>
  )
}

export default Chore

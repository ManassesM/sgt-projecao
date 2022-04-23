import { Task } from '@prisma/client'
import Chore from 'components/Chore'
import React from 'react'
import * as S from './styles'

type Props = {
  tasks: Task[]
}
const Chores: React.FC<Props> = ({ tasks }) => {
  return (
    <S.Tasks>
      {tasks?.map(task => (
        <Chore key={task.id} {...task} />
      ))}
    </S.Tasks>
  )
}

export default Chores

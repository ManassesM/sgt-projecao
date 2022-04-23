import { Task } from '@prisma/client'
import Chore from 'components/Chore'
import React from 'react'
import * as S from './styles'

type Props = {
  tasks: Task[]
}

const Chores: React.FC<Props> = ({ tasks }) => (
  <S.Tasks>
    {tasks?.map((task: Task) => (
      <Chore key={task.id} task={task} />
    ))}
  </S.Tasks>
)

export default Chores

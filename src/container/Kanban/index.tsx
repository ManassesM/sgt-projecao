import { Task } from '@prisma/client'
import Bar from 'components/Bar'
import Chores from 'container/Chore'
import { useTasks } from 'context/TasksContext'
import React from 'react'
import { priority } from 'utils/priority'
import * as S from './styles'

const Kanban: React.FC = () => {
  const { tasks } = useTasks()
  const list = JSON.parse(tasks)

  const p1 = list?.filter((l: Task) => l.priority === 1)
  const p2 = list?.filter((l: Task) => l.priority === 2)
  const p3 = list?.filter((l: Task) => l.priority === 3)

  return (
    <>
      <Bar />
      <S.Container>
        <S.Column>
          <S.Priority>Livre</S.Priority>
          <Chores tasks={priority(1, p1)} />
        </S.Column>
        <S.Column>
          <S.Priority>7 dias</S.Priority>
          <Chores tasks={priority(2, p2)} />
        </S.Column>
        <S.Column>
          <S.Priority>Urgente</S.Priority>
          <Chores tasks={priority(3, p3)} />
        </S.Column>
      </S.Container>
    </>
  )
}

export default Kanban

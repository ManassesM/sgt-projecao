import Bar from 'components/Bar'
import Chores from 'container/Chore'
import { useTasks } from 'context/TasksContext'
import React from 'react'
import { priority } from 'utils/priority'
import * as S from './styles'

const Kanban: React.FC = () => {
  const { tasks } = useTasks()

  return (
    <>
      <Bar />
      <S.Container>
        <S.Column>
          <S.Priority>Livre</S.Priority>
          <Chores tasks={priority(1, tasks)} />
        </S.Column>
        <S.Column>
          <S.Priority>7 dias</S.Priority>
          <Chores tasks={priority(2, tasks)} />
        </S.Column>
        <S.Column>
          <S.Priority>Urgente</S.Priority>
          <Chores tasks={priority(3, tasks)} />
        </S.Column>
      </S.Container>
    </>
  )
}

export default Kanban

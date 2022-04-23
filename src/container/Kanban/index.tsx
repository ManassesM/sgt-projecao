import Bar from 'components/Bar'
import Chores from 'container/Chore'
import { useTasks } from 'context/TasksContext'
import React from 'react'
import * as S from './styles'

const Kanban: React.FC = () => {
  const { tasks } = useTasks()

  const priorOne = tasks?.filter(({ priority }) => priority === 1)
  const priorTwo = tasks?.filter(({ priority }) => priority === 2)
  const priorThree = tasks?.filter(({ priority }) => priority === 3)

  return (
    <>
      <Bar />
      <S.Container>
        <S.Column>
          <S.Priority>Livre</S.Priority>
          <Chores tasks={priorOne} />
        </S.Column>
        <S.Column>
          <S.Priority>7 dias</S.Priority>
          <Chores tasks={priorTwo} />
        </S.Column>
        <S.Column>
          <S.Priority>Urgente</S.Priority>
          <Chores tasks={priorThree} />
        </S.Column>
      </S.Container>
    </>
  )
}

export default Kanban

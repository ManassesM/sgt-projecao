import Bar from 'components/Bar'
import Chores from 'container/Chore'
import { useTasks } from 'context/TasksContext'
import { useUsers } from 'context/UserContext'
import { useSession } from 'next-auth/react'
import React from 'react'
import * as S from './styles'

const Kanban: React.FC = () => {
  const { data } = useSession()
  const { tasks, setTasks } = useTasks()
  const { user } = useUsers()

  console.log(tasks)

  return (
    <>
      <Bar />
      <S.Container>
        <S.Column>
          <S.Priority>Livre</S.Priority>
          <Chores tasks={tasks} />
        </S.Column>
        <S.Column>
          <S.Priority>7 dias</S.Priority>
          <Chores tasks={tasks} />
        </S.Column>
        <S.Column>
          <S.Priority>Urgente</S.Priority>
          <Chores tasks={tasks} />
        </S.Column>
      </S.Container>
    </>
  )
}

export default Kanban

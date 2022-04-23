import Bar from 'components/Bar'
import Chores from 'container/Chore'
import { useTasks } from 'context/TasksContext'
import { useUsers } from 'context/UserContext'
import { useSession } from 'next-auth/react'
import React from 'react'
import { priority } from 'utils/priority'
import * as S from './styles'

const Kanban: React.FC = () => {
  const { data } = useSession()
  const { tasks, setTasks } = useTasks()
  const { users } = useUsers()

  const user = users?.filter(user => user?.email === data?.user?.email)
  const tasklist = tasks?.filter(task => task?.userId === user[0]?.id)
  setTasks(tasklist)
  console.log(tasks)

  return (
    <>
      <Bar />
      <S.Container>
        <S.Column>
          <S.Priority>Livre</S.Priority>
          <Chores tasks={priority(1, tasklist)} />
        </S.Column>
        <S.Column>
          <S.Priority>7 dias</S.Priority>
          <Chores tasks={priority(2, tasklist)} />
        </S.Column>
        <S.Column>
          <S.Priority>Urgente</S.Priority>
          <Chores tasks={priority(3, tasklist)} />
        </S.Column>
      </S.Container>
    </>
  )
}

export default Kanban

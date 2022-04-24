import Kanban from 'container/Kanban'
import { useTasks } from 'context/TasksContext'
import { useUsers } from 'context/UserContext'
import { Background } from 'layout/Background'
import { prisma } from 'lib/prisma'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { useEffect } from 'react'
import { getAllTasks } from 'services/task'

const Home: React.FC<unknown> = ({ tasks, user }) => {
  const { setUser } = useUsers()
  const { setTasks } = useTasks()

  useEffect(() => {
    setUser(user)
    setTasks(tasks)
  }, [])

  return (
    <Background>
      <Kanban />
    </Background>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { user } = await getSession(ctx)

  const currentUser = await prisma.user.findUnique({
    where: {
      email: user.email
    }
  })

  const tasks = await getAllTasks(currentUser.id)

  return {
    props: {
      tasks,
      user: currentUser
    }
  }
}

export default Home

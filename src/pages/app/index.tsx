import Kanban from 'container/Kanban'
import { useTasks } from 'context/TasksContext'
import { Background } from 'layout/Background'
import { prisma } from 'lib/prisma'
import { GetServerSideProps } from 'next'

const Home: React.FC<unknown> = ({ data }) => {
  const { setTasks } = useTasks()
  setTasks(data)

  return (
    <Background>
      <Kanban />
    </Background>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const tasks = await prisma.task.findMany()

  // console.log(tasks)
  const data = tasks?.map(task => {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      priority: task.priority,
      createdAt: task.createdAt.toISOString(),
      updatedAt: task.updatedAt.toISOString(),
      userId: task.userId
    }
  })

  return {
    props: {
      data
    }
  }
}

export default Home

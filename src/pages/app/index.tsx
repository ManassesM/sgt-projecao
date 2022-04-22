import { Task } from '@prisma/client'
import Kanban from 'container/Kanban'
import { Background } from 'layout/Background'
import { prisma } from 'lib/prisma'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'

type Props = {
  tasks: Task[]
}

const Home: React.FC<unknown> = ({ tasks }: Props) => {
  const { data } = useSession()

  return (
    <Background>
      <Kanban />
    </Background>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const tasks = await prisma.task.findMany()

  const data = tasks?.map(task => {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      createdAt: task.createdAt.toISOString(),
      updatedAt: task.updatedAt.toISOString(),
      userId: task.userId
    }
  })
  console.log(tasks)

  return {
    props: {
      tasks: data
    }
  }
}

export default Home

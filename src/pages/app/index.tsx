import { Task } from '@prisma/client'
import { prisma } from 'lib/prisma'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'

type Props = {
  tasks: Task[]
}

const Home: React.FC<any> = ({ tasks }: Props) => {
  const { data } = useSession()

  return (
    <div>
      <main>
        <h1>Hello World</h1>
        {JSON.stringify(data)}
        <h1>Tasks</h1>
      </main>
    </div>
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

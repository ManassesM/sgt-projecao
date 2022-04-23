import Kanban from 'container/Kanban'
import { useUsers } from 'context/UserContext'
import { Background } from 'layout/Background'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

const Home: React.FC<unknown> = ({ user }) => {
  const { setUser } = useUsers()
  setUser(user)

  return (
    <Background>
      <Kanban />
    </Background>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  // const tasks = await prisma.task.findMany()

  const { user } = await getSession(ctx)

  // console.log(tasks)
  // const data = tasks?.map(task => {
  //   return {
  //     id: task.id,
  //     title: task.title,
  //     description: task.description,
  //     priority: task.priority,
  //     createdAt: task.createdAt.toISOString(),
  //     updatedAt: task.updatedAt.toISOString(),
  //     userId: task.userId
  //   }
  // })

  return {
    props: {
      user
    }
  }
}

export default Home

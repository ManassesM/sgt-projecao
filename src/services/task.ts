import { Task, User } from '@prisma/client'
import { api } from 'utils/axios'

type Props = {
  id?: string
  title: string
  description: string
  priority: number
  user: User
}

export async function getAllTasks(id: string): Promise<Task[]> {
  return api.get(`/tasks/getAll?userId=${id}`).then(({ data }) => data?.tasks)
}

export async function updateTask({
  id,
  title,
  description,
  priority,
  user
}: Props): Promise<Task> {
  return api.post('/tasks/update', {
    id,
    title,
    description,
    priority,
    user
  })
}

export async function createTask({
  title,
  description,
  priority,
  user
}: Props): Promise<Task> {
  return api.post('/tasks/create', {
    title,
    description,
    priority,
    user
  })
}

export async function deleteTask(id: string): Promise<void> {
  api.delete(`/tasks/delete?userId=${id}`)
}

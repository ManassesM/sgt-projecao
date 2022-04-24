import { Task } from '@prisma/client'

export const priority = (number: number, tasks: Task[]): Task[] => {
  const list = tasks?.filter((l: Task) => l.priority === number)
  return list?.filter(({ priority }) => priority === number)
}

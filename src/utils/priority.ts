import { Task } from '@prisma/client'

export const priority = (number: number, tasks: Task[]): Task[] => {
  return tasks?.filter(({ priority }) => priority === number)
}

import { Task } from '@prisma/client'
import { createContext, ReactNode, useContext, useState } from 'react'

type TaskContextType = {
  task: Task
  setTask: (_: Task) => void
}

type TaskProviderType = {
  children: ReactNode
}

const TaskContext = createContext({} as TaskContextType)

export default function TaskProvider({ children }: TaskProviderType) {
  const [task, setTask] = useState<Task | null>(null)

  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTask() {
  const { task, setTask } = useContext(TaskContext)

  return { task, setTask }
}

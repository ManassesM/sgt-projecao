import { Task } from '@prisma/client'
import { createContext, ReactNode, useContext, useState } from 'react'

type TasksContextType = {
  tasks: Task[]
  setTasks: (_: Task[]) => void
}

type TasksProviderType = {
  children: ReactNode
}

const TasksContext = createContext({} as TasksContextType)

export default function TasksProvider({ children }: TasksProviderType) {
  const [tasks, setTasks] = useState<Task[] | null>(null)

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  const { tasks, setTasks } = useContext(TasksContext)

  return { tasks, setTasks }
}

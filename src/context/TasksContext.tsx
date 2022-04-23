import { createContext, ReactNode, useContext, useState } from 'react'

type TasksContextType = {
  tasks: string
  setTasks: (_: string) => void
}

type TasksProviderType = {
  children: ReactNode
}

const TasksContext = createContext({} as TasksContextType)

export default function TasksProvider({ children }: TasksProviderType) {
  const [tasks, setTasks] = useState<string | null>(null)

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

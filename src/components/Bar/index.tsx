import AddCircleIcon from '@mui/icons-material/AddCircle'
import SearchIcon from '@mui/icons-material/Search'
import Modal from 'container/Modal'
import { useToggleForm } from 'context/FormContext'
import { useTasks } from 'context/TasksContext'
import { useUsers } from 'context/UserContext'
import React, { useState } from 'react'
import { getAllTasks } from 'services/task'
import * as S from './styles'

const Bar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const { tasks, setTasks } = useTasks()
  const { user } = useUsers()
  const [value, setValue] = useState('')
  const { toggleForm, setToggleForm } = useToggleForm()

  async function handleSearch() {
    setOpen(!open)
    if (open) {
      const newTasks = await getAllTasks(user.id)
      setTasks(newTasks)
    }
  }

  function handleChange(e) {
    setValue(e.target.value)
    if (value !== '') {
      const filteredList = tasks.filter(task => task?.title.includes(value))
      setTasks(filteredList)
    }
  }

  return (
    <>
      <S.Container>
        <S.Search>
          <SearchIcon sx={{ fontSize: '25px' }} onClick={handleSearch} />
          {open && <S.Input onChange={e => handleChange(e)} />}
        </S.Search>
        <S.AddTask>
          <AddCircleIcon
            sx={{ fontSize: '30px' }}
            onClick={() => setToggleForm(true)}
          />
        </S.AddTask>
      </S.Container>
      {toggleForm && <Modal />}
    </>
  )
}

export default Bar

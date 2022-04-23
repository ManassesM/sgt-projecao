import AddCircleIcon from '@mui/icons-material/AddCircle'
import SearchIcon from '@mui/icons-material/Search'
import Modal from 'container/Modal'
import { useToggleForm } from 'context/FormContext'
import React, { useState } from 'react'
import * as S from './styles'

const Bar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const { toggleForm, setToggleForm } = useToggleForm()

  return (
    <>
      <S.Container>
        <S.Search>
          <SearchIcon
            sx={{ fontSize: '25px' }}
            onClick={() => setOpen(!open)}
          />
          {open && <S.Input />}
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

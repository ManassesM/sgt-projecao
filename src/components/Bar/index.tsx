import AddCircleIcon from '@mui/icons-material/AddCircle'
import SearchIcon from '@mui/icons-material/Search'
import Modal from 'container/Modal'
import React, { useState } from 'react'
import * as S from './styles'

const Bar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState(false)

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
            onClick={() => setModal(true)}
          />
        </S.AddTask>
      </S.Container>
      {modal && <Modal setModal={setModal} />}
    </>
  )
}

export default Bar

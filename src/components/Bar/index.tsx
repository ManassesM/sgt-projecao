import AddCircleIcon from '@mui/icons-material/AddCircle'
import SearchIcon from '@mui/icons-material/Search'
import React, { useState } from 'react'
import * as S from './styles'

const Bar: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <S.Container>
      <S.Search>
        <SearchIcon sx={{ fontSize: '25px' }} onClick={() => setOpen(!open)} />
        {open && <S.Input />}
      </S.Search>
      <S.AddTask>
        <AddCircleIcon sx={{ fontSize: '30px' }} />
      </S.AddTask>
    </S.Container>
  )
}

export default Bar

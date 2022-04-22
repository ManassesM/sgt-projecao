import AddCircleIcon from '@mui/icons-material/AddCircle'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import * as S from './styles'

const Bar: React.FC = () => {
  return (
    <S.Container>
      <S.Search>
        <SearchIcon sx={{ fontSize: '25px' }} />
        <S.Input />
      </S.Search>
      <S.AddTask>
        <AddCircleIcon sx={{ fontSize: '30px' }} />
      </S.AddTask>
    </S.Container>
  )
}

export default Bar

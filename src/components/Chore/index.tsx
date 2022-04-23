import CircleIcon from '@mui/icons-material/Circle'
import { Task } from '@prisma/client'
import React from 'react'
import * as S from './styles'

const Chore: React.FC = props => {
  const { title, description, priority } = props as Task

  // const [{ isDragging }, dragRef] = useDrag({
  //   item: { type: 'CARD' },
  //   collect: monitor => ({
  //     isDragging: monitor.isDragging()
  //   })
  // })

  return (
    <S.Container priority={priority}>
      <CircleIcon />
      <S.Title>
        <p>{title}</p>
      </S.Title>
      <S.Description>
        <span>{description}</span>
      </S.Description>
    </S.Container>
  )
}

export default Chore

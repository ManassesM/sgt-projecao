import React from 'react'
import * as S from './styles'


interface IButton {
  title: string
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const Button: React.FC<IButton> = ({ title, type, onClick }) => (
  <S.Button type={type} onClick={onClick}>
    {title}
  </S.Button>
)

export default Button

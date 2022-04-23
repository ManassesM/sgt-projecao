import React from 'react'
import errors from 'utils/errors.json'
import * as S from './styles'

type InputErrorProps = {
  type: string
  field: string
}

const InputError: React.FC<InputErrorProps> = ({ type, field }) => {
  return <S.Message>{errors[field][type]}</S.Message>
}

export default InputError

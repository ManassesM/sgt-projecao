import { useToggleForm } from 'context/FormContext'
import React from 'react'
import Form from './Form'
import * as S from './styles'

const Modal: React.FC = () => {
  const { setToggleForm } = useToggleForm()

  return (
    <S.ModalContainer>
      <S.CloseButton
        sx={{ fontSize: '30px' }}
        onClick={() => setToggleForm(false)}
      />
      <S.Modal>
        <Form />
      </S.Modal>
    </S.ModalContainer>
  )
}

export default Modal

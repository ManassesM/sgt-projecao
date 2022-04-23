import React from 'react'
import Form from './Form'
import * as S from './styles'

type Props = {
  setModal: (_: boolean) => void
}

const Modal: React.FC<Props> = ({ setModal }) => {
  return (
    <S.ModalContainer>
      <S.CloseButton
        sx={{ fontSize: '30px' }}
        onClick={() => setModal(false)}
      />
      <S.Modal>
        <Form />
      </S.Modal>
    </S.ModalContainer>
  )
}

export default Modal

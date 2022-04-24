import { useToggleForm } from 'context/FormContext'
import { useTask } from 'context/TaskContext'
import React from 'react'
import Form from './Form'
import * as S from './styles'

const Modal: React.FC = () => {
  const { setToggleForm } = useToggleForm()
  const { setTask } = useTask()

  function handleClose() {
    setTask(null)
    setToggleForm(false)
  }
  return (
    <S.ModalContainer>
      <S.CloseButton sx={{ fontSize: '30px' }} onClick={handleClose} />
      <S.Modal>
        <Form />
      </S.Modal>
    </S.ModalContainer>
  )
}

export default Modal

import CloseIcon from '@mui/icons-material/Close'
import styled from 'styled-components'

export const Modal = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 90%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  right: 10px;
  top: 10px;

  color: #4a70a8;
  cursor: pointer;

  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.2);
  }
`

export const ModalContainer = styled.section`
  background: #f2f7ff;

  position: absolute;
  z-index: 1000;

  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);

  height: 420px;
  width: 420px;
  border-radius: 5px;

  box-shadow: 0px 0px 10px 3px rgba(84, 84, 84, 1);
  -webkit-box-shadow: 0px 0px 10px 3px rgba(84, 84, 84, 1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(84, 84, 84, 1);
`

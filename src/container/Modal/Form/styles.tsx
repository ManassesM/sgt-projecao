import styled from 'styled-components'

export const Btn = styled.button`
  width: 100%;
  height: 40px;

  padding: 5px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;

  background: #4a70a8;
  color: #a8cbff;
  text-transform: uppercase;

  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    filter: brightness(1.03);
    transform: scale(1.02);
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #4a70a8;
  padding: 5px;

  color: #4a70a8;
  font-size: 17px;
  font-weight: bold;
  &:focus {
    outline: none;
  }
`

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #4a70a8;
  padding: 5px;

  color: #4a70a8;
  font-size: 17px;
  font-weight: bold;

  &:focus {
    outline: none;
  }

  &[type='number'] {
    width: 50px;
  }
`

export const Label = styled.label`
  font-size: 17px;
  color: #4a70a8;
  font-weight: bold;
  text-transform: uppercase;
`

export const WrapBtn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

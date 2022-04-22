import styled from '@emotion/styled'

export const Input = styled.input`
  margin-left: 5px;
  background: none;
  border: none;
  color: #f0f0f0;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`

export const AddTask = styled.div`
  svg {
    transition: transform 0.2s ease-in;
    cursor: pointer;
    color: #4a70a8;

    &:hover {
      transform: scale(1.05);
    }
  }
`

export const Search = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background: #4a70a8;
  padding: 5px 10px;
  border-radius: 15px;
  width: auto;

  svg {
    color: #b9d5ff;
    cursor: pointer;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

import styled from 'styled-components'

export const Tasks = styled.div`
  background: #a8cbff;
  border-radius: 5px;

  margin-top: 15px;
  padding: 15px;

  position: absolute;
  height: calc(100% - 65px);
  width: 100%;

  overflow-y: scroll;

  /* scrollbar */
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 5px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: #f0f0f0;
  }
`

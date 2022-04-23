import styled from '@emotion/styled'

export const Priority = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  background: #a8cbff;
  border-radius: 5px;

  color: #4a70a8;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`

export const Column = styled.section`
  width: 100%;

  position: relative;
`

export const Container = styled.div`
  margin-top: 15px;
  height: calc(100vh - 208px);

  display: flex;
  justify-content: space-between;
  gap: 25px;
`

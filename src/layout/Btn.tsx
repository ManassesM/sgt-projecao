import styled from 'styled-components'

export const Btn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  min-width: 300px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 45px;
  }
`

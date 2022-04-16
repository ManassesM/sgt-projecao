import styled from 'styled-components'

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #eeeeee;
  min-width: 250px;
  border: none;
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in;
  &:hover {
    transform: scale(1.03);
  }
`

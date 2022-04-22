import styled from 'styled-components'

export const Box = styled.div`
  min-width: 400px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 15px;
  border-radius: 5px;

  box-shadow: 0px 0px 13px 3px rgba(199, 199, 199, 0.64);
  -webkit-box-shadow: 0px 0px 13px 3px rgba(199, 199, 199, 0.64);
  -moz-box-shadow: 0px 0px 13px 3px rgba(199, 199, 199, 0.64);
  padding: 25px;

  p {
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }
`

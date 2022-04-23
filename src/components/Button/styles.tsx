import styled from 'styled-components'

export const Button = styled.button`
  background: #4a70a8;
  color: #eeeeee;
  min-width: 90px;
  border: none;
  border-radius: 5px;

  padding: 5px;

  cursor: pointer;
  transition: box-shadow 0.2s ease-in;

  &:hover {
    box-shadow: 0px 0px 13px 3px rgba(199, 199, 199, 0.64);
    -webkit-box-shadow: 0px 0px 13px 3px rgba(199, 199, 199, 0.64);
    -moz-box-shadow: 0px 0px 13px 3px rgba(199, 199, 199, 0.64);
  }
`

export const BtnWrapp = styled.div``

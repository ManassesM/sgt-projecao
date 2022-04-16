import styled from '@emotion/styled'

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  span {
    font-size: 13px;
  }

  input {
    padding: 10px 5px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 15px;
`

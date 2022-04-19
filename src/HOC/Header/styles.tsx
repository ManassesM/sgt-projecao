import LogoutIcon from '@mui/icons-material/Logout'
import styled from 'styled-components'


export const SubTitle = styled.p`
  color: #fff;
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;

  p,
  span {
    font-size: 15px;
    color: #fff;
  }

  @media (max-width: 414px) {
    p,
    span {
      display: none;
    }
  }
`

export const Logout = styled(LogoutIcon)`
  position: absolute;
  right: 35px;

  cursor: pointer;
`

export const Bar = styled.header`
  width: auto;
  background-color: #4a70a8;
  height: 98px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;

  svg {
    color: #fff;
  }

  @media (max-width: 414px) {
    svg {
      font-size: 40px;
    }
  }
`

import LogoutIcon from '@mui/icons-material/Logout'
import styled from 'styled-components'

export const UserProps = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: #f0f0f0;
  font-weight: 300;
`

// Dropdown

export const Logout = styled(LogoutIcon)`
  cursor: pointer;
`

export const Dropdown = styled.div`
  position: absolute;
  bottom: -40px;
  right: 0;
  width: 90px;
  height: 35px;

  background: #f0f0f0;
  border-radius: 5px;
  padding: 0 8px;

  display: flex;
  align-items: center;
  gap: 10px;

  color: #4a70a8;
  border: 1px solid #4a70a8;

  cursor: pointer;
  svg {
    color: #4a70a8;
  }

  transition: all 0.2s ease-in;
  &:hover {
    filter: brightness(1.03);
  }
`

export const User = styled.div`
  position: absolute;
  right: 35px;

  img {
    width: 50px;
    height: 50px;
    border: 2px solid #f0f0f0;
    border-radius: 50px;
    cursor: pointer;

    transition: all 0.2s ease-in;
    &:hover {
      filter: brightness(1.1);
    }
  }
`

// Header
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

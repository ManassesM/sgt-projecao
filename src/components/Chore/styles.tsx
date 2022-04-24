import CircleIcon from '@mui/icons-material/Circle'
import DeleteIcon from '@mui/icons-material/Delete'
import styled from 'styled-components'

export const Description = styled.div`
  height: 120px;
  padding: 10px;
  overflow-y: hidden;
`

export const Title = styled.div`
  height: 20px;
  padding: 10px 10px 15px 10px;

  p {
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const PriorityIcon = styled(CircleIcon)<{ priority: number }>`
  position: absolute;
  right: 0;

  margin: 10px 15px;
  color: #74ff87;
  color: ${({ priority }) => priority === 2 && '#efff74'};
  color: ${({ priority }) => priority === 3 && '#ff7474'};
`
export const TrashIcon = styled(DeleteIcon)`
  position: absolute;
  right: 0;
  bottom: 0;

  margin: 10px 15px;
  color: #ff7474;

  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
  }
`

export const Container = styled.section`
  position: relative;

  background: #f2f7ff;
  height: 150px;
  margin-bottom: 10px;
  padding: 5px;

  border-radius: 5px;

  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.01);
  }
`

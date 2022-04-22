import Bar from 'components/Bar'
import Tasks from 'container/Task'
import * as S from './styles'

const Kanban = () => {
  return (
    <>
      <Bar />
      <S.Container>
        <S.Column>
          <S.Priority>Livre</S.Priority>
          <Tasks />
        </S.Column>
        <S.Column>
          <S.Priority>7 dias</S.Priority>
          <Tasks />
        </S.Column>
        <S.Column>
          <S.Priority>Urgente</S.Priority>
          <Tasks />
        </S.Column>
      </S.Container>
    </>
  )
}

export default Kanban

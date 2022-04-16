import * as S from './styles'

import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'

const HOCHeader = () => {
  return (
    <S.Bar>
      <AssignmentTurnedInIcon sx={{ fontSize: 55 }} />
      <S.Logo>
        <p>Sistema de</p>
        <p>Gerenciamento de</p>
        <p>Tarefas</p>
      </S.Logo>
    </S.Bar>
  )
}

export const Header = (Component: React.ComponentType<any>) => {
  const MyComponent = (props: any) => (
    <>
      <HOCHeader />
      <Component {...props} />
    </>
  )
  return MyComponent
}

import { HeaderDiv, Menu, Tittle } from './styles'

const Header = () => {
  return (
    <>
      <HeaderDiv>
        <Tittle>Receitinhas</Tittle>
        <Menu to={'/ingredients'}>Por Ingredientes</Menu>
      </HeaderDiv>
    </>
  )
}
export default Header

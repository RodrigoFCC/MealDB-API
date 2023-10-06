import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderDiv = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.mainColor};
  text-align: center;
  padding: 24px 0;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`

export const Tittle = styled.h1`
  cursor: pointer;
`

export const Menu = styled(Link)`
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
`

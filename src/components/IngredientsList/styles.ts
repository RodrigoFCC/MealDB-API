import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardIngredients = styled(Link)`
  background-color: ${(props) => props.theme.secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 16px;
  color: ${(props) => props.theme.mainColor};
  margin: 0 5px 0 5px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.secondaryColor};
    background-color: ${(props) => props.theme.mainColor};
  }
`
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8px;
  row-gap: 8px;
  margin-top: 16px;
`
export const InputStyle = styled.input`
  margin-top: 3rem;
  margin-bottom: 1rem;
  width: 100%;
  padding: 4px 16px;
  outline-color: ${(props) => props.theme.mainColor};
`

export const IngredientsTittle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  color: ${(props) => props.theme.mainColor};
`

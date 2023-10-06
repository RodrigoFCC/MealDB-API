import styled from 'styled-components'

export const CardIngredients = styled.a`
  background-color: ${(props) => props.theme.secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 16px;
  color: ${(props) => props.theme.mainColor};
  margin: 0 5px 0 5px;
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

export {}

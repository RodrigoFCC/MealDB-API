import styled from 'styled-components'

export const UlMeal = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const InputStyle = styled.input`
  width: 100%;
  padding: 4px 16px;
  outline-color: ${(props) => props.theme.mainColor};
`

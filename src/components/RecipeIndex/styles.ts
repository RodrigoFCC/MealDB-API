import styled from 'styled-components'

export const CardLetters = styled.div`
  width: 50px;
  height: 40px;
  background-color: ${(props) => props.theme.secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.mainColor};
  margin: 0 5px 0 5px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.secondaryColor};
    background-color: ${(props) => props.theme.mainColor};
  }
`
export const IndexContainer = styled.div`
  display: flex;
  margin: 2.5rem 0;
`

export {}

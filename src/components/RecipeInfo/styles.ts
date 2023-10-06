import styled from 'styled-components'

export const MealTittle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  color: ${(props) => props.theme.mainColor};
`

export const SubTittle = styled.h3`
  margin-top: 8px;
  margin-bottom: 8px;
  font-weight: 500;

  a {
    cursor: pointer;
    text-decoration: none;
  }
`

export const Description = styled.h4`
  margin-top: 8px;
  margin-bottom: 8px;
  font-weight: 100;
`

export const MealImg = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    img {
      max-width: 100%;
    }
  }
`

export const MealCategory = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-around;
`

export const Ingredients = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  row-gap: 8px;
  margin-top: 16px;
  justify-items: start;
`

export const SubTittleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const YoutubeVideo = styled.div`
  width: 80%;
  margin: 3rem auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`

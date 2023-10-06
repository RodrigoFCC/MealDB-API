import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LiMeal = styled.li`
  border: 1px solid ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.mainColor};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    color: ${(props) => props.theme.secondaryColor};
    background-color: ${(props) => props.theme.mainColor};

    a {
      border-color: ${(props) => props.theme.mainColor};
      background-color: ${(props) => props.theme.secondaryColor};
      color: ${(props) => props.theme.mainColor};
    }
  }
`
export const MealLink = styled(Link)`
  display: flex;
`

export const H3 = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const VideoLink = styled.a`
  border-color: ${(props) => props.theme.secondaryColor};
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.secondaryColor};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
export const Img = styled.img`
  width: 100%;
  margin-bottom: 8px;
`

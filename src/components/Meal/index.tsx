/* eslint-disable react/jsx-key */
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal
} from 'react'
import { H3, Img, MealLink, VideoLink, LiMeal } from './styles'

type Props = {
  data: [] | undefined
}

const Meal = ({ data }: Props) => {
  console.log(data)

  return (
    <>
      {!data
        ? 'Não Encontrado'
        : data.map(
            (item: {
              strYoutube: string | undefined
              idMeal: any
              strMealThumb: string | undefined
              strMeal:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined
            }) => {
              return (
                <LiMeal key={item.idMeal}>
                  <MealLink to={`/recipe/${item.idMeal}`}>
                    <Img src={item.strMealThumb}></Img>
                  </MealLink>
                  <H3>{item.strMeal}</H3>
                  <VideoLink target="_blank" href={item.strYoutube}>
                    Youtube
                  </VideoLink>
                </LiMeal>
              )
            }
          )}
    </>
  )
}

export default Meal

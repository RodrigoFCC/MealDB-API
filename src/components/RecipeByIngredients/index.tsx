import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Meal from '../Meal'

import { UlMeal } from '../../containers/MealList/styles'

const RecipeByIngredients = () => {
  const [item, setItem] = useState()
  const [show, setShow] = useState(false)

  const { recipeIngredient } = useParams()

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${recipeIngredient}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals)
        setShow(true)
      })
  }, [])

  return (
    <div>
      <UlMeal>{show ? <Meal data={item} /> : 'Não Encontrado'}</UlMeal>
    </div>
  )
}
export default RecipeByIngredients

import { useEffect, useState } from 'react'
import { CardIngredients } from './styles'

const IngredientsList = () => {
  const [item, setItem] = useState([])
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals)
      })
  }, [])

  return (
    <>
      {item.map((item: { strIngredient: string | undefined; idMeal: any }) => {
        return (
          <CardIngredients key={item.idMeal}>
            <h3>{item.strIngredient}</h3>
          </CardIngredients>
        )
      })}
    </>
  )
}

export default IngredientsList

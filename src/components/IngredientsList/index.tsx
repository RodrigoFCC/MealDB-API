import { useEffect, useState } from 'react'
import { CardIngredients, IngredientsTittle } from './styles'
import { InputStyle } from './styles'

const IngredientsList = () => {
  const [item, setItem] = useState([])
  const [ingredient, setIngredient] = useState('')
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals)
      })
  }, [])

  return (
    <>
      <IngredientsTittle>Ingredientes</IngredientsTittle>
      <InputStyle
        type="search"
        className="search-bar"
        placeholder="Pesquise pelo nome"
      />
      <div className="cardContainer">
        {item.map(
          (item: { strIngredient: string | undefined; idMeal: any }) => {
            return (
              <CardIngredients
                to={`/ingredients/${item.strIngredient}`}
                key={item.idMeal}
              >
                <h3>{item.strIngredient}</h3>
              </CardIngredients>
            )
          }
        )}
      </div>
    </>
  )
}

export default IngredientsList

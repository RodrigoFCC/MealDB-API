import React, { useEffect, useState } from 'react'
import { CardIngredients, IngredientsTittle } from './styles'
import { InputStyle } from './styles'

type Ingredient = {
  strIngredient: string
  idMeal: string
}

const IngredientsList: React.FC = () => {
  const [item, setItem] = useState<Ingredient[]>([])
  const [ingredient, setIngredient] = useState<string>('')

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals)
      })
  }, [])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value.toLowerCase()
    setIngredient(searchText)
  }

  const filteredItems = item.filter((item) =>
    item.strIngredient.toLowerCase().includes(ingredient)
  )

  return (
    <>
      <IngredientsTittle>Ingredientes</IngredientsTittle>
      <InputStyle
        type="search"
        className="search-bar"
        placeholder="Pesquise pelo nome"
        onChange={handleInputChange}
      />
      <div className="cardContainer">
        {filteredItems.map((item) => (
          <CardIngredients
            to={`/ingredients/${item.strIngredient}`}
            key={item.idMeal}
            className="cardLink"
          >
            <h3>{item.strIngredient}</h3>
          </CardIngredients>
        ))}
      </div>
    </>
  )
}

export default IngredientsList

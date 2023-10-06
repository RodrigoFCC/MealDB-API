import { useEffect, useState } from 'react'

import Meal from '../Meal'

import { InputStyle, UlVaga } from '../../containers/MealList/styles'
import RecipeIndex from '../RecipeIndex'

const RecipeByIngredients = () => {
  const [url, setUrl] = useState(
    'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
  )
  const [item, setItem] = useState()
  const [show, setShow] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals)
        setItem(data.meals)
        setShow(true)
      })
  }, [url])

  const setIngredient = (ingredient: string) => {
    setUrl(`www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
  }

  const searchRecipe = () => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  }

  return (
    <div>
      <div className="indexContainer">
        <RecipeIndex alphaIndex={(alpha) => setIngredient(alpha)} />
      </div>
      <InputStyle
        type="search"
        className="search-bar"
        placeholder="Pesquise pelo nome"
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={searchRecipe}
      />

      <UlVaga>{show ? <Meal data={item} /> : 'Não Encontrado'}</UlVaga>
    </div>
  )
}

export default RecipeByIngredients

export {}

import { useEffect, useState } from 'react'

import Meal from '../../components/Meal'

import { InputStyle, UlMeal } from './styles'
import RecipeIndex from '../../components/RecipeIndex'

const MealList = () => {
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

  const setIndex = (alpha: string) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
  }

  const searchRecipe = () => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  }

  return (
    <div>
      <div className="indexContainer">
        <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
      </div>
      <InputStyle
        type="search"
        className="search-bar"
        placeholder="Pesquise pelo nome"
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={searchRecipe}
      />

      <UlMeal>{show ? <Meal data={item} /> : 'Não Encontrado'}</UlMeal>
    </div>
  )
}

export default MealList

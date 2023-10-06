import { useEffect, useState } from 'react'

import { SearchButton, InputStyle, FormStyle } from './styles'

const SearchByname = () => {
  const [search, setSearch] = useState('')
  const [url, setUrl] = useState(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
  )

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals)
      })
  }, [url])

  const searchRecipe = () => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  }
  return (
    <FormStyle onSubmit={searchRecipe}>
      <InputStyle
        placeholder="Pesquise a receita por nome"
        onChange={(e) => setSearch(e.target.value)}
        type="search"
      />
      <SearchButton type="submit">Pesquisar</SearchButton>
    </FormStyle>
  )
}
export default SearchByname

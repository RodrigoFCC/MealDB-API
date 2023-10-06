import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  MealCategory,
  MealImg,
  MealTittle,
  SubTittle,
  Ingredients,
  SubTittleDiv,
  Description,
  YoutubeVideo
} from './styles'
let id = ''
const RecipeInfo = () => {
  const [item, setItem] = useState<any>(null)
  const { recipeId } = useParams()
  if (recipeId !== ' ') {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0])
      })
  }
  if (item) {
    const strYoutube = item.strYoutube
    const str = strYoutube.split('=')
    id = str[str.length - 1]
  }

  return (
    <>
      {!item ? (
        ''
      ) : (
        <div>
          <MealTittle>{item.strMeal}</MealTittle>
          <MealImg>
            <img src={item.strMealThumb} alt="" />
          </MealImg>
          <MealCategory>
            <SubTittle>Area: {item.strArea}</SubTittle>
            <SubTittle>Categoria: {item.strCategory}</SubTittle>
          </MealCategory>
          <SubTittleDiv>
            <h2>Ingredientes</h2>
          </SubTittleDiv>
          <Ingredients>
            {[...Array(20)].map((_, index) => {
              const ingredientKey = `strIngredient${index + 1}`
              const measureKey = `strMeasure${index + 1}`
              return (
                item[ingredientKey] && (
                  <Description key={ingredientKey}>
                    {item[ingredientKey]}: {item[measureKey]}
                  </Description>
                )
              )
            })}
          </Ingredients>
          <SubTittleDiv>
            <h2>Instructions</h2>
          </SubTittleDiv>
          <Description>{item.strInstructions}</Description>
          <YoutubeVideo>
            <SubTittleDiv>
              <h2>Video</h2>
            </SubTittleDiv>
            <iframe
              width="
                        100%"
              height="515"
              title="recipeVideo"
              src={`https://www.youtube.com/embed/${id}`}
            ></iframe>
          </YoutubeVideo>
        </div>
      )}
    </>
  )
}
export default RecipeInfo

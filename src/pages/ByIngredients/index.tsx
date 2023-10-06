import Header from '../../components/Header'
import IngredientsList from '../../components/IngredientsList'

const Ingredients = () => (
  <>
    <Header />
    <div className="container cardContainer">
      <IngredientsList></IngredientsList>
    </div>
  </>
)

export default Ingredients

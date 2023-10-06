import Header from '../../components/Header'
import SearchByname from '../../components/SearchByName'
import MealList from '../../containers/MealList'

const ByName = () => (
  <>
    <Header />
    <div className="container">
      <SearchByname></SearchByname>
    </div>
  </>
)

export default ByName

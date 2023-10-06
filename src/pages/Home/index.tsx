import Header from '../../components/Header'
import ListaVagas from '../../containers/MealList'

const Home = () => (
  <>
    <Header />
    <div className="container">
      <ListaVagas />
    </div>
  </>
)

export default Home

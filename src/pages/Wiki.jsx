import Cards from '../components/Cards'
import Filters from '../components/Filters'

export default function Wiki() {

  return (
    <div className='App'>
      <nav>
        <h1 className='pt-6 font-bold text-4xl text-center'>Ricky & Morty<span className='text-blue-400'> Wiki</span></h1>
      </nav>

      <div>
        <div className='grid xl:grid-cols-4'>
          <Filters />
          <Cards />
          </div>
      </div>
    </div>
  )
}
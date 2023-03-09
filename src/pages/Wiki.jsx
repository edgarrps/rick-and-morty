import { useState } from 'react'
import Cards from '../components/Cards'
// import Filters from '../components/Filters'
import Pagination from '../components/Pagination'
import Search from '../components/Search'
import ApiChars from '../services/ApiChars.jsx'

export default function Wiki() {
  const api = 'https://rickandmortyapi.com/api'
  const [pageNumber, setPageNumber] = useState(1)
  const [search, setSearch] = useState('')
  const [chars, setChars] = useState([])
  const { info, results } = chars

  return (
    <div>
      <nav className='w-screen h-[50px] fixed z-50 bg-cyan-500 shadow-xl'>
        <h1 className='font-bold text-3xl text-center text-white sm:place-self-center'>Rick and Morty<span className='text-blue-700'> Chars</span></h1>
      </nav>

      <div className='flex justify-center'>
        <ApiChars api={api} pageNumber={pageNumber} search={search} chars={chars} setChars={setChars} />
        <div className='container'>
          <Search setSearch={setSearch}/>
          <div className='row'>
            {/* <Filters /> */}
            <div className='grid xl:grid-cols-3 md:grid-cols-2 md:pr-1 sm:grid-cols place-items-center pt-10'>
              <Cards page='/' pageNumber={pageNumber} results={results} />
            </div>
            <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
          </div>
        </div>
      </div>
    </div>
  )
}
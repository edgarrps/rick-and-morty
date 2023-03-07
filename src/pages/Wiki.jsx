import { useState, useEffect } from 'react'
import Cards from '../components/Cards'
import Filters from '../components/Filters'
import Search from '../components/Search'
import Api from '../services/Api.jsx'

export default function Wiki() {
  const api = 'https://rickandmortyapi.com/api'
  const [pageNumber, setPageNumber] = useState(1)
  const [chars, setChars] = useState([])
  const { info, results } = chars

  return (
    <div className='bg-cyan-900'>
      <nav className='w-screen h-[50px] fixed z-50 bg-cyan-500 shadow-xl'>
        <h1 className='font-bold text-3xl text-center text-white sm:place-self-center'>Rick and Morty<span className='text-blue-700'> Wiki</span></h1>
      </nav>

      <div>
        <Api api={api} pageNumber={pageNumber} setPageNumber={setPageNumber} chars={chars} setChars={setChars} />
        <div className='container'>
          <Search />
          <div className='row'>
            <div><Filters /></div>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 md:pr-1 sm:grid-cols place-items-center'>
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
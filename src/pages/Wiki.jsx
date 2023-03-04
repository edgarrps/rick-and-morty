import { useState, useEffect } from 'react'
import Cards from '../components/Cards'
import Filters from '../components/Filters'
import Api from '../services/Api.jsx'


export default function Wiki() {
  const api = 'https://rickandmortyapi.com/api'
  const [pageNumber, setPageNumber] = useState(1)
  const [chars, setChars] = useState([])
  const { info, results } = chars

  return (
    <div className='bg-cyan-700'>
      <nav className='w-screen xl:text-4xl h-[50px] fixed bg-cyan-500 font-bold text-4xl text-center text-white shadow-xl'>
        Rick and Morty<span className='text-blue-700'> Wiki</span>
      </nav>

      <div>
        <Api api={api} pageNumber={pageNumber} setPageNumber={setPageNumber} chars={chars} setChars={setChars} />
        <div className='container'>
          <div className='row'>
            <div className='col-3'><Filters /></div>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols place-items-center'>
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
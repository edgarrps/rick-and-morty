import './App.css'
import Filters from './components/Filters'

export default function App() {

  return (
    <div className='App'>
      <nav>
        <h1 className='font-bold text-4xl text-center'>Ricky & Morty<span className='text-blue-400'> Wiki</span></h1>
      </nav>

      <div className='flex flex-row'>
        <div className='grid grid-cols-3 h-40 w-40'><Filters /></div>
        <div className='grid grid-cols-8'></div>
      </div>
    </div>
  ) 
}
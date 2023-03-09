import { Routes, Route } from 'react-router-dom'
import Wiki from './pages/Wiki'
import CharInfo from './pages/CharInfo'

export default function RoutesApp () {

    return (
        <>
            <Routes>
                <Route exact path='/' element={<Wiki />} />
                <Route exact path='/:id' element={<CharInfo />} />
            </Routes>
        </>
    )
}
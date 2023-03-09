import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'

export default function CharInfo() {
    const { id } = useParams()
    const [char, setChar] = useState([])
    const { name, image, origin, gender, species, status, type, episode } = char

    useEffect(() => {
        (async function () {
            const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`).then((res) => res.json())
            setChar(data)
        })()
    }, [])

    return (
        <div className='pt-10'>
            <Card name={name} image={image} origin={origin} gender={gender} species={species} status={status} type={type} episode={episode} />
        </div>
    )
}
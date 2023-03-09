import { Link, useParams } from "react-router-dom"
export default function Card(props) {
    const statusPtBr =
        (props.status === 'Alive' && props.gender === 'Female') ? 'Viva' :
            (props.status === 'Alive' && props.gender === 'Male') ? 'Vivo' :
                (props.status === 'Dead' && props.gender === 'Female') ? 'Morta' :
                    (props.status === 'Dead' && props.gender === 'Male') ? 'Morto' :
                        (props.status === 'Alive' && props.gender === 'unknown') ? 'Viv@' :
                            (props.status === 'Dead' && props.gender === 'unknown') ? 'Mort@' :
                                (props.status === 'Alive' && props.gender === 'props.genderless') ? 'Vive' :
                                    (props.status === 'Dead' && props.gender === 'Genderless') ? 'Morte' :
                                        'Desconhecido'

    return (
        <div className='grid grid-cols-1 place-items-center'>
                            <Link to='../' ><button className='text-xl text-white rounded-md bg-green-600 w-[100px] hover:shadow hover:scale-105' type='submit'>Retornar</button></Link>

                <h1 className='text-2xl text-white font-bold pt-20 pb-5'>{props.name}</h1>
                <img src={props.image} />
                <div className='text-center p-2 text-white text-xl font-bold'>
                    <p className='p-1'>Estado: <span className=''>{statusPtBr}</span></p>
                    <p className='p-1'>Local: <span className=''>{props.origin?.name === 'unknown' ? 'Desconhecido' : props.origin?.name}</span></p>
                    <p className='p-1'>Espécie: <span className=''>{props.species}</span></p>
                </div>
        </div>
    )
}

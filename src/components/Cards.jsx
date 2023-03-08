export default function Cards({ results }) {
    let display
    results ? display = results.map(result => {
        const { id, name, image, gender, origin, status } = result
        const statusPtBr =
            (status === 'Alive' && gender === 'Female') ? 'Viva' :
                (status === 'Alive' && gender === 'Male') ? 'Vivo' :
                    (status === 'Dead' && gender === 'Female') ? 'Morta' :
                        (status === 'Dead' && gender === 'Male') ? 'Morto' :
                            (status === 'Alive' && gender === 'unknown') ? 'Viv@' :
                                (status === 'Dead' && gender === 'unknown') ? 'Mort@' :
                                    (status === 'Alive' && gender === 'Genderless') ? 'Vive' :
                                        (status === 'Dead' && gender === 'Genderless') ? 'Morte' :
                                            'Desconhecido'

        return (
            <div key={id}>
                <div className='pb-10'>
                    <div className='grid grid-cols-2 h-[133.25px] w-[303.34px] hover:shadow-2xl rounded-l-sm rounded-r-full hover:scale-105 hover:shadow-slate-100/30'>
                        <div className='relative'>
                            <img className='rounded-l-md w-[151.67px] h-[135px]' src={image}></img>
                            <p className={`absolute text-center top-1 right-10 left-1 text-sm ${status === 'Alive' ? 'w-[43px] bg-green-500 rounded-md text-white font-bold' : status === 'Dead' ? 'w-[55px] bg-red-700 rounded-md text-white font-bold' : 'w-[105px] bg-stone-600 rounded-md text-white font-bold'}`}>{statusPtBr}</p>
                        </div>

                        <div className='relative bg-gray-700 rounded-r-full pl-0.5'>
                            <p className={`font-bold text-red-300 pt-11 ${name.length > 20 ? 'text-pq pt-13' : 'text-md'}`}>{name}</p>
                            <p className='text-xs pt-1 pl-1 text-white'><strong>&#127757;:</strong> {origin.name === 'unknown' ? '???' : origin.name }</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }) : display =<div className='text-2xl text-center text-white'>Personagem não encontrado</div>

    return (
        <>{display}</>
    )
}
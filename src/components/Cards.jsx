export default function Cards({ results }) {
    let display
    results ? display = results.map(result => {
        const { id, name, image, gender, origin, status } = result
        const statusBr = (status === 'Alive' && gender === 'Female') ? 'Viva' :
        (status === 'Alive' && gender === 'Male') ? 'Vivo' :
        (status === 'Dead' && gender === 'Female') ? 'Morta' :
        (status === 'Dead' && gender === 'Male') ? 'Morto' : 'Desconhecido'
        return (
            <div key={id}>
                <div className='pb-10'>
                    <div className='grid grid-cols-2 h-[133.25px] w-[303.34px] rounded-r-xl rounded-l-2xl'>
                        <div className='relative'>
                            <img className='rounded-l-xl w-[151.67px] h-[135px]' src={image}></img>
                            <p className={`text-center absolute top-1 right-10 left-1 text-sm ${status === 'Alive' ? 'w-[43px] bg-green-500 rounded-md text-white font-bold' : status === 'Dead' ? 'w-[55px] bg-red-700 rounded-md text-white font-bold' : 'w-[105px] bg-gray-500 rounded-md text-white font-bold'}`}>{statusBr}</p>
                        </div>
                        <div className='bg-gray-300 rounded-r-lg pl-3 pt-1'>
                            <p className={`font-bold text-red-500 pb-1 ${name.length > 20 ? 'text-xs' : 'text-md'}`}>{name}</p>
                            <p className='text-xs'><strong>Gênero:</strong> {gender === 'Male' ? 'Masculino' : 'Feminino'}</p>
                            <p className='text-xs'><strong>Local:</strong> {origin.name}</p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }) : display = 'Personagem não encontrado'

    return (
        <>{display}</>
    )
}
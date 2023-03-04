export default function Cards({ results }) {
    let display
    results ? display = results.map(result => {
        const { id, name, image, gender, origin } = result
        return (
            <div key={id}>
                <div className='pb-10'>
                    <div className='grid grid-cols-2 h-[159.9px] w-[364px] rounded-r-xl rounded-l-2xl border-2'>
                        <img className='rounded-l-xl w-[180px] h-[156px]' src={image}/>
                        <div className='bg-gray-300 rounded-r-lg pl-3 pt-1'>
                            <p className={`font-bold text-red-500 pb-2 ${name.length > 20 ? 'text-xs' : 'text-md'}`}>{name}</p>
                                <p className='text-xs'><strong>Gênero:</strong> {gender === 'Male' ? 'Masculino' : 'Feminino'}</p>
                                <p className='text-xs'><strong>Origem:</strong> {origin.name}</p>
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
export default function Pagination({ pageNumber, setPageNumber }) {

    let prev = () => setPageNumber(value => value - 1)
    let next = () => setPageNumber(value => value + 1)



    return (
        <div className='flex p-10 text-center justify-evenly'>
            <button disabled={pageNumber === 1} onClick={prev} className='disabled:bg-stone-300 disabled:text-stone-400 rounded pl-2 pr-2 bg-cyan-600 text-white font-bold'>Voltar</button>
            <button onClick={next} className='rounded pl-3 pr-3 bg-cyan-600 text-white font-bold'>Próx.</button>
        </div>
    )
}
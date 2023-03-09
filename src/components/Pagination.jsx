import ReactPaginate from 'react-paginate'
export default function Pagination({ info, pageNumber, setPageNumber }) {

    return (
        <div className='flex justify-center pt-5 pb-20'>
            <ReactPaginate className='inline-flex items-center lg:space-x-6' 
            disabledClassName='hover:shadow-2xl hover:scale-105 pl-1 pr-1 text-center text-stone-300 font-bold rounded bg-stone-400' 
            previousClassName='hover:shadow-2xl hover:scale-105 pl-1 pr-1 text-center text-white font-bold rounded bg-cyan-400' 
            nextClassName='hover:shadow-2xl hover:scale-105 pl-1 pr-1 text-center text-white font-bold rounded bg-cyan-400' 
            breakClassName='hover:shadow-2xl hover:scale-105 text-center lg:w-[26px] lg:h-[24px] space-between text-white font-bold rounded bg-cyan-600' 
            previousLabel={'Voltar'} 
            nextLabel={'Avançar'} 
            pageClassName='hover:shadow-2xl hover:scale-105 text-center lg:w-[26px] lg:h-[24px] space-between text-white font-bold rounded bg-cyan-400' 
            activeClassName='hover:shadow-2xl hover:scale-105 text-center lg:w-[26px] lg:h-[24px] space-between text-white font-bold rounded bg-green-400' 
            onPageChange={(value) => setPageNumber(value.selected + 1)} pageCount={info?.pages} />
        </div>
    )
}
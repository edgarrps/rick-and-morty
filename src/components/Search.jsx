export default function Search(props) {

    return (
        <form>
            <div className='flex justify-center pt-20'>
                <input onChange={e => {props.setSearch(e.target.value)}} type='text' placeholder='Pesquise aqui...' className='flex rounded-l-full pl-5 p-2 w-4/12' />
                <button className='bg-cyan-500 w-[30px] rounded-r-full'>&#128270;</button>
            </div>
        </form>
    )
}
export default function Search(props) {

    return (
        <form value={(e) => e.preventDefault()}>
            <div className='flex justify-center pt-20'><input type='text' className='flex rounded-l-full pl-5 p-2 w-4/12' />
                <button type='submit' className='bg-cyan-500 w-[30px] rounded-r-full'>&#128270;</button></div>
        </form>
    )
}
import { useEffect } from 'react'

export default function ApiChars(props) {

    const apiChars = `${props.api}/character/?page=${props.pageNumber}&name=${props.search}`
    useEffect(() => {
        (async function () {
            const data = await fetch(apiChars).then((res) => res.json())
            props.setChars(data)
        })()
    }
    
    , [apiChars])
}
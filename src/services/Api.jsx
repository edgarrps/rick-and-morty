import { useEffect } from 'react'

export default function Api(props) {

    const apiChar = `${props.api}/character/?page=${props.pageNumber}&name=${props.search}`
    useEffect(() => {
        (async function () {
            const data = await fetch(apiChar).then((res) => res.json())
            props.setChars(data)
        })()
    }, [apiChar])
}
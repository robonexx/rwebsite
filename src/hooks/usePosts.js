import { useState, useEffect} from 'react'
import { getPostsPage } from '../api/api'


const usePosts = (pageNum = 1) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState({})
    const [hasNextPage, setHasNextPage] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        setError({})

        const controller = new AbortController()
        const {signal } = controller

        getPostsPage(pageNum, {signal})
        .then(data => {
            setResults(prev => [...prev, ...data])
            setHasNextPage(Boolean(data.length))
            setIsLoading(false)
        })
        .catch(err => {
            setIsLoading(false)
            if(signal.aborted) return
            setIsError(true)
            setError({ message: err.message})
        })

        return () => controller.abort()
    }, [pageNum])

    return  {isLoading, isError, error, results, hasNextPage }

}


export default usePosts
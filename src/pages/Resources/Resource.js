import {useState, useCallback, useRef} from 'react'
import usePosts from '../../hooks/usePosts'
import Sidebar from '../../components/Sidebar/Sidebar'
import Post from '../../components/Post/Post'

import './Resource.scss'

export default function Resource() {
    const [pageNum, setPageNum] = useState(1)
    const {
        isLoading,
        isError,
        error,
        results,
        hasNextPage
    } = usePosts(pageNum)

    const observer = useRef()
    const lastPostRef = useCallback(post => {
        if (isLoading) return

        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(posts => {
            if (posts[0].isIntersecting && hasNextPage) {
                console.log('We are near the last post!')
                setPageNum(prev => prev + 1)
            }
        })

        if (post) observer.current.observe(post)
    }, [isLoading, hasNextPage])

    if (isError) return <p className='center'>Error: {error.message}</p>

    const content = results.map((post, i) => {
        if (results.length === i + 1) {
            return <Post ref={lastPostRef} key={post.id} post={post} />
        }
        return <Post key={post.id} post={post} />
    })

    return (
        <>
            <h1 id="top">&infin; Infinite Query &amp; Scroll<br />&infin; Ex. 1 - React only</h1>
            {content}
            {isLoading && <p className="center">Loading More Posts...</p>}
            <p className="center"><a href="#top">Back to Top</a></p>
        </>
    )

    /* const [pageNum, setPageNum] = useState(1)
    const {isLoading, isError, error, results, hasNextpage} = usePosts(pageNum)

    const observer = useRef()
    const lastPostRef = useCallback(post => {
        if(isLoading) return
        if(observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(posts => {
            if(posts[0].isIntersecting && hasNextpage) {
                console.log('we are near the last post')
                setPageNum(prev => prev + 1)
            }
        })

        if(post) observer.current.observe(post)
    }, [isLoading, hasNextpage]);

    if(isError)  return <p className='center error'>Error: {error.message}</p>

    const content = results.map((post, i) => {
        if(results.length === i + 1) {
            return <Post ref={lastPostRef} key={post.id} post={post} />
        }
        return <Post key={post.id} post={post} />
    })

  return (
    <div className='resource'>
        <Sidebar />
        {isLoading  && <p className='loading center'>Wait a sec, loading...</p>}
        <div className='somecontent'>
            Hello
        {content}
        </div>
    </div>
  ) */
}

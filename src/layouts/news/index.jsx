import React, {useEffect} from 'react'
import NewsComponent from '../../components/news'

const News = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <NewsComponent />
        </>
    )
}

export default News
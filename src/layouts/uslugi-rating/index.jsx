import React, {useEffect} from 'react'
import UslugiRatingComponent from '../../components/uslugi-rating'

const UslugiRating = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <UslugiRatingComponent />
        </>
    )
}

export default UslugiRating
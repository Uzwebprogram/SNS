import React from 'react'
import Hero from './hero/index'
import TypesRatings from './types-rating'
import RatingUsers from './rating-users'
import RequestConsultation from '../request-consultation/index'

const UslugiRatingComponent = () => {
    return (
        <>
            <Hero />
            <TypesRatings />
            <RatingUsers />
            <RequestConsultation />
        </>
    )
}

export default UslugiRatingComponent
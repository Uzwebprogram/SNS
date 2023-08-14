import React from 'react'
import Hero from './hero'
import ConsultantCompany from './consultant-company'
import Counter from './counter'
import ConsultantMethodology from './consultant-method'
import Principles from './principles'
import RequestConsultation from '../request-consultation'

const ConsultantComponent = () => {
    return (
        <>
            <Hero />
            <ConsultantCompany />
            <Counter />
            <ConsultantMethodology />
            <Principles />
            <RequestConsultation />
        </>
    )
}

export default ConsultantComponent
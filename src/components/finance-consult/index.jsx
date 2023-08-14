import React from 'react'
import Hero from './hero/index'
import UslugiFinanceSecond from './uslugi-finance-second/index'
import Presentation from './presentation'
import InvestPresent from './invest-present'
import RequestConsultation from '../request-consultation/index'

const FinanceConsultComponent = () => {
    return (
        <>
            <Hero />
            <UslugiFinanceSecond />
            <Presentation />
            <InvestPresent />
            <RequestConsultation />
        </>
    )
}

export default FinanceConsultComponent
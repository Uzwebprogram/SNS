import React, {useEffect} from 'react'
import FinanceConsultComponent from '../../components/finance-consult'

const FinanceConsult = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <FinanceConsultComponent />
        </>
    )
}

export default FinanceConsult
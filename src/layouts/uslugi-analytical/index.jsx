import React, {useEffect} from 'react'
import UslugiAnalyticalComponent from '../../components/uslugi-analytical'

const UslugiAnalytical = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <UslugiAnalyticalComponent />
        </>
    )
}

export default UslugiAnalytical
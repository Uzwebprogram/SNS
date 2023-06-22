import React, {useEffect} from 'react'
import ConsultantComponent from '../../components/concultant'

const Consultant = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <ConsultantComponent />
        </>
    )
}

export default Consultant
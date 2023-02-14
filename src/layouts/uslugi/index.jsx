import React, { useEffect } from 'react'
import UslugiComponent from '../../components/uslugi-components'

const Uslugi = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
     <UslugiComponent/>
    </>
  )
}

export default Uslugi
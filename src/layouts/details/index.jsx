import React, { useEffect } from 'react'
import DetailsComponents from '../../components/details-components'

function Details() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
        <DetailsComponents/>
    </>
  )
}

export default Details
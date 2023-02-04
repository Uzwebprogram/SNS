import React, { useEffect } from 'react'
import RankingComponents from '../../components/ranking-components'

const Raking = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
     <RankingComponents/>
    </>
  )
}

export default Raking
import React, { useEffect } from 'react'
import WhatIsRankingComponent from '../../components/what-is-ranking-components'

const WhatIsRaking = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
     <WhatIsRankingComponent/>
    </>
  )
}

export default WhatIsRaking
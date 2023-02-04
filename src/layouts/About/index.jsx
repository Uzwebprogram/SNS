import React, { useEffect } from 'react'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>About</div>
  )
}

export default About
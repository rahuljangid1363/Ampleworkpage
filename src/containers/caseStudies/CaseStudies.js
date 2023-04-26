import React from 'react'
import { NavbarComp } from '../../components'
// import { NavbarAndWelcomePage } from '../../components'

const CaseStudies = (props) => {
  const { bgImage } = props
  return (
    <div>
      {/* <NavbarAndWelcomePage bgImage={bgImage}/> */}
      <NavbarComp />
      <h1>case studies page</h1>
    </div>
  )
}

export default CaseStudies

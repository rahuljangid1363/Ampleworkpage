import React from 'react'
import { NavbarComp } from '../../components'
// import { NavbarAndWelcomePage } from '../../components'

const WhatWeDo = (props) => {
  const {bgImage}=props
  return (
    <div>
    {/* <NavbarAndWelcomePage bgImage={bgImage}/> */}
    <NavbarComp/>
    <h1>what we do page</h1>
    </div>
  )
}

export default WhatWeDo

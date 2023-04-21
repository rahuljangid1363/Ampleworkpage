import React from 'react'
import { NavbarAndWelcomePage } from '../../components'

const WhatWeDo = (props) => {
  const {bgImage}=props
  return (
    <div>
    <NavbarAndWelcomePage bgImage={bgImage}/>
    </div>
  )
}

export default WhatWeDo

import React from 'react'
import { NavbarAndWelcomePage } from '../../components'

const OurCulture = (props) => {
  const{bgImage}=props
  return (
    <div>
    <NavbarAndWelcomePage bgImage={bgImage} />
    </div>
  )
}

export default OurCulture

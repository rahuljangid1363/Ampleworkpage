import React from 'react'
import { NavbarAndWelcomePage } from '../../components'

const WhoWeAre = (props) => {
  const {textColor,bgImage}=props
  console.log('______',bgImage);
  return (
    <div>
    <NavbarAndWelcomePage tC={textColor} bgImage={bgImage} />
    </div>
  )
}

export default WhoWeAre

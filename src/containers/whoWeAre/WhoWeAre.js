import React from 'react'
import { NavbarComp } from '../../components';
// import { NavbarAndWelcomePage } from '../../components'

const WhoWeAre = (props) => {
  const {bgImage}=props
  console.log('______',bgImage);
  return (
    <div>
    {/* <NavbarAndWelcomePage  bgImage={bgImage} /> */}
    <NavbarComp/>
    <h1>who we are page</h1>
    </div>
  )
}

export default WhoWeAre

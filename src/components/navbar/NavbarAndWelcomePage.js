import React from 'react'
import NavbarComp from './navbarComp/NavbarComp'
import WelcomeHome from './welcomeHome/WelcomeHome'
const NavbarAndWelcomePage = (props) => {
  const{bgImage}=props
  console.log('????????---->>>>>',bgImage)
  return (
    <div className="NavbarAndWelcomePage container-fluid "style={{backgroundImage: `url(${bgImage})`}}>
  <NavbarComp/>
  <WelcomeHome/>
  {/* <img src={bgImage} alt="" /> */}
    </div>
  )
}

export default NavbarAndWelcomePage

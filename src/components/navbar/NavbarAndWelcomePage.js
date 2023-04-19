import React from 'react'
import NavbarComp from './navbarComp/NavbarComp'
import WelcomeHome from './welcomeHome/WelcomeHome'
const NavbarAndWelcomePage = () => {
  return (
    <div className="NavbarAndWelcomePage container-fluid bg-dark">
  <NavbarComp/>
  <WelcomeHome/>
    </div>
  )
}

export default NavbarAndWelcomePage

import React from 'react'
import { NavbarComp } from '../../components'
// import { NavbarAndWelcomePage } from '../../components'

const Blog = (props) => {
  const{bgImage}=props
  return (
    <div>
{/* <NavbarAndWelcomePage bgImage={bgImage}/> */}
<NavbarComp/>
    </div>
  )
}

export default Blog

import React from 'react'
import { NavbarAndWelcomePage } from '../../components'

const Blog = (props) => {
  const{bgImage}=props
  return (
    <div>
<NavbarAndWelcomePage bgImage={bgImage}/>
    </div>
  )
}

export default Blog

import React from 'react'
import { Image } from 'react-bootstrap'

const ActivityCard = (props) => {
    const{prop}=props
  return (
    <>
      <div className=' rounded px-3 py-2 text-light'>
          <Image src={prop.icon}  width='60px'/>
      </div>
      <div className='align-self-center'>
        <p style={{fontSize:'0.9rem'}} className=' px-4 '>{prop.text}</p>
      </div>
    </>
  )
}

export default ActivityCard

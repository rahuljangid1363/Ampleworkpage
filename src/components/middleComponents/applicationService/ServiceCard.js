import React from 'react'

const ServiceCard = (props) => {
  const{prop}=props
  return (
    <div className='px-2'>
      <h1>{prop.logo}</h1>
      <h5 className='py-2'>{prop.heading}</h5>
      <p style={{lineHeight:'1.4rem'}}>{prop.text}</p>
    </div>
  )
}

export default ServiceCard

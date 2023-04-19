import React from 'react'

const ActivityCard = (props) => {
    const{prop}=props
  return (
    <>
      <div style={{backgroundColor:prop.bgColor,boxShadow:prop.borderColor,height:'3.5rem'  }} className=' rounded px-3 py-2 text-light'>
        <h3>{prop.icon}</h3>
      </div>
      <div className='align-self-center'>
        <p style={{fontSize:'0.9rem'}} className='fw-semibold px-4 '>{prop.text}</p>
      </div>
    </>
  )
}

export default ActivityCard

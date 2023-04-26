import React from 'react'
import { Image } from 'react-bootstrap';

const ApplicationCards = (props) => {
    const {prop} = props;
  return (
    <div className='px-2'>
  <div>
    <Image src={prop.logo} className='img-fluid' width='60px'/>
  </div>
    <h5 className='py-2'>{prop.heading}</h5>
    <p style={{lineHeight:'1.4rem'}}>{prop.text}</p>
  </div>
  )
}

export default ApplicationCards

import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import { Button, Image } from 'react-bootstrap';
import enterpriseUiUx from './asset/enterpriseUIUX.png'
const EnterpriseUiUx = () => {
  return (
    <div className='container-fluid py-5' style={{ fontFamily: 'Poppins',backgroundColor:'rgb(245 245 245)' }}>
    <div className="container">
        <div className="row">

            <h3 className='text-center'>Enterprise UI/UX Web Design</h3>
            <p className='text-center px-3 pt-3 pb-2 '>We create aesthetically pleasing user-friendly interfaces for fascinating your targeted audiences. We incorporate a rich UI library that helps businesses to empower their business values in an effective way. Although, we create an interface for improving the experience and enhancing productivity. From the customer’s perspective, a rich UI/UX enable them to interact with your website in a better way.</p>
        </div>
        <div className="row">
            <div className="col-md-6">
                <h5 className='text-dark py-3'>Designs that Delight Users</h5>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'> Integration with other systems.</span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Improved user experiences and engagement.</span> </p>
                <p><BsCheckCircle className='text-primary' /><span className='px-2'>Increased productivity and time savings.</span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Easier Navigation. </span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Higher User-friendliness.</span> </p>
                <Button className='bg-primary rounded-0 mb-3'>Let's Talk</Button>
            </div>
            <div className="col-md-6  text-center">
                <Image src={enterpriseUiUx} width='80%' className='rounded' />
            </div>
        </div>
    </div>
</div>
  )
}

export default EnterpriseUiUx

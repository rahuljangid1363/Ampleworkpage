import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import enterprisePortalbg from './asset/enterprisePortal.png'
import { Button, Image } from 'react-bootstrap';
const EnterprisePortal = () => {
  return (
    <div className='container-fluid py-3' style={{ fontFamily: 'Poppins',backgroundColor:'rgb(255 255 255)' }}>
    <div className="container">
        <div className="row">
            <h3 className='text-center'>Enterprise Portal Development </h3>
            <p className='text-center px-3 pb-3 pt-2 '>Now, create in-house portals for your employees so that they can access all the operations through central location-enabled functions. Our project managers develop innovative portal solutions for your organization by integrating them with existing system practices. It can facilitate the exchange of information and ideas that allows businesses to communicate more effectively.</p>
        </div>
        <div className="row">
            <div className="col-md-6  text-center">
                <Image src={enterprisePortalbg} width='80%' className='rounded'/>  
            </div>
            <div className="col-md-6">
                <h5 className='text-dark py-3'>Digital Magic For Enterprises</h5>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'> Centralized access to applications, data and resources.</span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Customized portals for unique business needs.</span> </p>
                <p><BsCheckCircle className='text-primary' /><span className='px-2'>Better data analysis and reporting.</span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Secure access to confidential information.</span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Streamlined workflows and processes.</span> </p>
                <Button className='bg-primary rounded-0 '>Let's Talk</Button>
            </div>
        </div>
    </div>
</div>
  )
}

export default EnterprisePortal

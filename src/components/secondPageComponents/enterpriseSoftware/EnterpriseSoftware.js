import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import { Button, Image } from 'react-bootstrap';
import enterpriseSoftware from './assest/enterpriseSoftware.png'
const EnterpriseSoftware = () => {
    return (
        <div className='container-fluid py-3' style={{ fontFamily: 'Poppins',backgroundColor:'rgb(248 249 250)' }}>
            <div className="container">
                <div className="row">

                    <h3 className='text-center'>Enterprise Software Development </h3>
                    <p className='text-center px-3 pb-3 pt-2  '>The market of enterprise software development is projected to grow at an astonishing growth rate of 7.12% CAGR. Thus, we encourage our clients to scale up their operations with our reliable enterprise software development services. Through our solutions, businesses can handle complex processes as well as adopt to-scale solution approaches in an effective manner.</p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h5 className='text-dark py-3'>Our Superpower: Enterprise Solutions</h5>
                        <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Better customer experiences and engagement.</span> </p>
                        <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Increased revenue and profitability.</span> </p>
                        <p><BsCheckCircle className='text-primary' /><span className='px-2'>Access to the latest technologies and trends.</span> </p>
                        <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Integration with other systems and applications.</span> </p>
                        <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Reduced development time and costs.</span> </p>
                        <Button className='bg-primary rounded-0 mb-3 '>Let's Talk</Button>
                    </div>
                    <div className="col-md-6  text-center">
                        <Image src={enterpriseSoftware} width='80%' className='rounded' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterpriseSoftware

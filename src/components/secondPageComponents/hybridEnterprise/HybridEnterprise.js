import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import hybridBg from './asset/hybird.png'
import { Button, Image } from 'react-bootstrap';
const HybridEnterprise = () => {
  return (
    <div className='container-fluid py-5' style={{ fontFamily: 'Poppins',backgroundColor:'rgb(255 255 255)' }}>
    <div className="container">
        <div className="row">

            <h3 className='text-center'>Hybrid Enterprise Web App Development </h3>
            <p className='text-center px-3 pb-3 pt-2 '>Hybrid enterprise web app development service combines the best of native and web-based applications. These applications are built using web technologies such as HTML5, CSS, and JavaScript and are wrapped in a native container for distribution on app stores. This approach provides the flexibility of web apps with the performance and functionality of native apps, making them ideal for enterprise use.</p>
        </div>
        <div className="row">
            <div className="col-md-6  text-center">
                <Image src={hybridBg} width='80%' className='rounded' />  
            </div>
            <div className="col-md-6">
                <h5 className='text-dark py-3'>Boost Business With Hybrid Solutions</h5>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Cross-platform compatibility</span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Offline functionality and access to data</span> </p>
                <p><BsCheckCircle className='text-primary' /><span className='px-2'>Increased security and data protection.</span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Seamless integration with existing systems.</span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Greater flexibility and scalability.</span> </p>
                <Button className='bg-primary rounded-0 '>Let's Talk</Button>
            </div>
        </div>
    </div>
</div>
  )
}

export default HybridEnterprise

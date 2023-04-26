import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import enterpriseBg from './asset/enterprise.png'
import { Button, Image } from 'react-bootstrap';
const EnterpriseWeb = () => {
    return (
        <div className='container-fluid py-3' style={{ fontFamily: 'Poppins',backgroundColor:'rgb(255 255 255)' }}>
            <div className="container">
                <div className="row">
                    <h3 className='text-center'>Enterprise Web Development Services </h3>
                    <p className='text-center px-3 pt-2 pb-4 '>Enterprise web development services effectively involve building and maintaining web-based
                        applications for large-scale organizations. Our developers
                        incorporate 7+ years of experience in working towards the
                        latest technologies - such as: Java, .NET, Ruby on Rails, React,
                        Node.js and many more. We also provide consultancy services to you for
                        suggesting new enterprise IT strategies and enterprise web design solutions.</p>
                </div>
                <div className="row">
                    <div className="col-md-6  text-center">
                        <Image src={enterpriseBg} width='80%' className='rounded' />
                    </div>
                    <div className="col-md-6">
                        <h5 className='text-dark py-3'>Your Website, Our Masterpiece</h5>
                        <p><BsCheckCircle className='text-primary' /> <span className='px-2'> Customized solutions to meet specific business needs.</span> </p>
                        <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Increased efficiency and productivity.</span> </p>
                        <p><BsCheckCircle className='text-primary' /><span className='px-2'>Improved communication and collaboration.</span> </p>
                        <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Enhanced security and data protection.</span> </p>
                        <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Scalable solutions that can grow with the business.</span> </p>
                        <Button className='bg-primary rounded-0 '>Let's Talk</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterpriseWeb

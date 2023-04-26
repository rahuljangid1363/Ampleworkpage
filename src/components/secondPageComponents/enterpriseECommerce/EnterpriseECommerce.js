import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import { Button, Image } from 'react-bootstrap';
import enterpriseEcom from './asset/enterpriseEcom.png'
const EnterpriseECommerce = () => {
  return (
    <div className='container-fluid py-3' style={{ fontFamily: 'Poppins',backgroundColor:'rgb(248 249 250)' }}>
    <div className="container">
        <div className="row">

            <h3 className='text-center'>Enterprise E-Commerce Development</h3>
            <p className='text-center px-3 pt-2 pb-3  '>Enterprise e-commerce development enables large organizations to build and manage online stores. It involves creating a custom e-commerce platform that integrates with existing business systems and supports a range of features, such as: multiple payment gateways, shipping options and customer management. This service helps businesses to streamline their sales processes, expand their reach and increase revenue through online sales.</p>
        </div>
        <div className="row">
            <div className="col-md-6">
                <h5 className='text-dark py-3'>Elevating Enterprise E-Commerce</h5>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Competitive advantage through digital innovation.</span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Personalized and engaging shopping experiences.</span> </p>
                <p><BsCheckCircle className='text-primary' /><span className='px-2'>Data-driven business insights.</span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Multichannel capabilities for audiences.</span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Empower your business growth.</span> </p>
                <Button className='bg-primary rounded-0 mb-3'>Let's Talk</Button>
            </div>
            <div className="col-md-6  text-center">
                <Image src={enterpriseEcom} width='80%' className='rounded' />
            </div>
        </div>
    </div>
</div>
  )
}

export default EnterpriseECommerce

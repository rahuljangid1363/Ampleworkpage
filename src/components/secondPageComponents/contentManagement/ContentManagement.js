import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import { Button, Image } from 'react-bootstrap';
import content from './asset/content.png'
const ContentManagement = () => {
  return (
    <div className='container-fluid py-3' style={{ fontFamily: 'Poppins',backgroundColor:'rgb(248 249 250)' }}>
    <div className="container">
        <div className="row">
            <h3 className='text-center'>Content Management Solutions</h3>
            <p className='text-center px-3 pt-2 pb-3  '>Integrate our content management business solutions for your corporation to store and manage digital content - such as: images, videos and documents. Now, you can empower your business’s SEO practices with the profound utilization of our expert solutions. Moreover, it will also be going to scale your business’s content marketing practices so that you can attract audiences in an effective manner.</p>
        </div>
        <div className="row">
            <div className="col-md-6">
                <h5 className='text-dark py-3'>Simplifying Content Creation</h5>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Effective content management.</span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Improved user experience.</span> </p>
                <p><BsCheckCircle className='text-primary' /><span className='px-2'>Secure management of information. </span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Integration with other systems.</span> </p>
                <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Streamlined Workflows.</span> </p>
                <Button className='bg-primary rounded-0 mb-3 '>Let's Talk</Button>
            </div>
            <div className="col-md-6  text-center">
                <Image src={content} width='80%' className='rounded'/>
            </div>
        </div>
    </div>
</div>
  )
}

export default ContentManagement

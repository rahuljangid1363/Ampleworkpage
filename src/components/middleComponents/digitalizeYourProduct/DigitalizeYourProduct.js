import React from 'react'
import { Button, Image } from 'react-bootstrap'
import Chatbots from './assets/Chatbots-in-Healthcare.png'
import FoldableSmartPhone from './assets/Foldable-Smart-Phone-Mobile-App-Development.png'
import MobileDevApps from './assets/Mobile-Devops-Development.png'
const DigitalizeYourProduct = () => {
    return (
        <div className='container-fluid py-5' style={{fontFamily:'Poppins'}}>
            <div className="container">
                <h4 className='text-center py-4 fw-bold'>Digitalize Your Product Idea - Learn More About MVP</h4>
                <div className="row">
                    <div className="col-md-4" >
                        <figure >
                            <Image src={Chatbots} className='img-fluid rounded' style={{height:'11rem'}}/>
                            <figcaption className='text-secondary fw-semibold pt-2'>Chatbots in Healthcare - Advantages,
                                Disadvantages Applications & their Future</figcaption>
                        </figure>
                    </div>
                    <div className="col-md-4">
                    <figure>
                            <Image src={FoldableSmartPhone} className='img-fluid rounded' style={{height:'11rem'}} />
                            <figcaption className='text-secondary fw-semibold pt-2'>Foldable Smartphone App Development – 5 Dos</figcaption>
                        </figure>
                    </div>
                    <div className="col-md-4">
                    <figure>
                            <Image src={MobileDevApps} className='img-fluid rounded' style={{height:'11rem'}}/>
                            <figcaption className='text-secondary fw-semibold pt-2'>Mobile DevOps – Advantages & Challenges</figcaption>
                        </figure>
                    </div>
                </div>
                <div className='text-center'>
                <Button variant="primary" className='rounded-pill'>Read all post</Button>  
                </div>
            </div>
        </div>
    )
}

export default DigitalizeYourProduct

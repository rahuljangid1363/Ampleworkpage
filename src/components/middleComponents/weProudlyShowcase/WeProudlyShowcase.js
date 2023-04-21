import React from 'react'
import './WeProudlyShowcase.css'
import { BsLinkedin } from "react-icons/bs";
import Carousel from 'react-bootstrap/Carousel';
const WeProudlyShowcase = () => {
    return (
        <div className='container-fluid py-5'>
            <div className="container ">



                <Carousel variant='primary'>
                    <Carousel.Item >
                        <h3 className='text-center pb-5'>We Proudly Showcase - Our Client Appreciations</h3>
                        <div className="row pt-3">
                            <div className="Layer1 col-md-4 offset-md-1 border border-5">
                                <div className='Layer2a'>

                                </div>
                            </div>
                            <div className="col-md-7 text-center">
                                <h5 className='text-dark'>Amplework is a great team to work with, highly recommended.</h5>
                                <p>Flawless Plank was an AI based fitness application and we are glad we get a
                                    chance to work on this project with Amplework. They have excellent skills in building
                                    mobile apps and willing to work around issues to solve them .. Highly Recommended!</p>
                                <h5 className='text-dark fw-bold'>MANU NAMBOODIRI</h5>
                                <p className='text-secondary' style={{lineHeight:'15px'}}>Founder, Flawless Plank</p>
                                <h2 className='text-primary' style={{lineHeight:'15px'}}><BsLinkedin /></h2>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h3 className='text-center pb-5'>We Proudly Showcase - Our Client Appreciations</h3>
                        <div className="row pt-3">
                            <div className="Layer1 col-md-4 offset-md-1 border border-5">
                                <div className='Layer2b'>

                                </div>
                            </div>
                            <div className="col-md-7 text-center">
                                <h5 className='text-dark'>Amplework is a great team to work with, highly recommended.</h5>
                                <p>Flawless Plank was an AI based fitness application and we are glad we get a
                                    chance to work on this project with Amplework. They have excellent skills in building
                                    mobile apps and willing to work around issues to solve them .. Highly Recommended!</p>
                                <h5 className='text-dark fw-bold'>Ken Murai</h5>
                                <p className='text-secondary' style={{lineHeight:'15px'}}>Founder & CEO Facil GO</p>
                                <h2 className='text-primary' style={{lineHeight:'15px'}}><BsLinkedin /></h2>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h3 className='text-center pb-5'>We Proudly Showcase - Our Client Appreciations</h3>
                        <div className="row pt-3">
                            <div className="Layer1 col-md-4 offset-md-1 border border-5">
                                <div className='Layer2c'>

                                </div>
                            </div>
                            <div className="col-md-7 text-center">
                                <h5 className='text-dark'>Amplework is a great team to work with, highly recommended.</h5>
                                <p>Flawless Plank was an AI based fitness application and we are glad we get a
                                    chance to work on this project with Amplework. They have excellent skills in building
                                    mobile apps and willing to work around issues to solve them .. Highly Recommended!</p>
                                <h5 className='text-dark fw-bold'>Lartz Plazgo</h5>
                                <p className='text-secondary' style={{lineHeight:'15px'}}>Founder, Lartz Softwares</p>
                                <h2 className='text-primary' style={{lineHeight:'15px'}}><BsLinkedin /></h2>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>


            </div>
        </div>
    )
}

export default WeProudlyShowcase

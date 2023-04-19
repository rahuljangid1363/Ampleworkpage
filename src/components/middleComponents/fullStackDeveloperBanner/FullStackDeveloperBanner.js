import React from 'react'
import { Button } from 'react-bootstrap'
import './FullStackDeveloperBanner.css'
import { ImArrowUpRight2 } from "react-icons/im";
const FullStackDeveloperBanner = () => {
    return (
        <div className='container-fluid py-5'>
            <div className="FullStackDeveloperBanner container py-4 text-light rounded">
                <div className="row pt-3">
                    <div className="col-md-8">
                        <h5>Dedicated Full-stack developer?</h5>
                        <p>Let's Discuss Your Project how we will transform your idea into an amazing digital product?</p>
                    </div>
                    <div className="col-md-4">
                        <div className='align-self-center'><Button variant='primary' color='light' className='rounded-pill fw-semibold' style={{fontSize:'0.8rem'}}>Get 2 Week Free Trial <ImArrowUpRight2 className=''/></Button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullStackDeveloperBanner

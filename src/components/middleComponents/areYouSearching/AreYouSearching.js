import React from 'react'
import { BsCheckCircle } from "react-icons/bs";
import './AreYouSearching.css'
const AreYouSearching = () => {
    return (
        <div className='container-fluid'>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className='w-75'>
                        <h4>Are you searching for a dedicated technology partner, not just a service provider?</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 ">
                        <p className='text-secondary'>Our clients generated more than $50 million in revenues
                            by creating seamless mobile applications
                            that run without any bugs or glitches.
                            Thus, we continue to upgrade our services
                            to support clients in generating higher revenue for operations.</p>
                        <div>
                            <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Personalized business services.</span> </p>
                            <p><BsCheckCircle className='text-primary' /> <span className='px-2'>Advanced practices for DevOps.</span> </p>
                            <p><BsCheckCircle className='text-primary'/><span className='px-2'>Proficiency in AI/ML/Blockchain Solutions.</span> </p>
                            <p><BsCheckCircle className='text-primary'/> <span className='px-2'>Exclusive support for digital transformation.</span> </p>
                            <p><BsCheckCircle className='text-primary'/> <span className='px-2'>Large scale & complex app building.</span> </p>
                        </div>
                    </div>
                    <div className="AreYouSearchingImage col-md-6">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AreYouSearching

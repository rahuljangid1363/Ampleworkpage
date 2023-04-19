import React from 'react'
import { Card } from 'react-bootstrap';
import { GiCircleCage } from "react-icons/gi";
import "./LetsGetYourApp.css"
const card = [
    {
        logo: GiCircleCage(),
        heading: 'Fixed',
        text: 'Our in-house support matrix and best-in-industry prices will resultant in cost reduction by 30% to 40%.'
    },
    {
        logo: GiCircleCage(),
        heading: 'Issue',
        text: 'Slow and glitch software updates with no-real benefits for users?'
    },
    {
        logo: GiCircleCage(),
        heading: 'Issue',
        text: 'Need profound resources for program visibility?'
    },
]
const LetsGetYourApp = () => {
    return (
        <div className='container-fluid py-5' style={{ backgroundColor: 'rgb(250,250,250)' }}>
            <div className="container">
                <div className="row text-center justify-content-center">
                    <div className='w-50'>
                        <h4>Let's get your app in shape - contact us now and let the maintenance magic begin</h4>
                    </div>
                    <div className='w-75 '>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>

                <div className="row justify-content-center my-2">
                    {
                        card.map((variant) => (
                            <Card

                                key={variant}
                                style={{ width: '18rem' }}
                                className="cards m-2 rounded text-center"
                            >
                     
                                <Card.Body>
                                   <div className='innerCard rounded' style={{height:'13rem'}}>
                                   <h1>{variant.logo}</h1>
                                    <span className='fw-semibold' style={{color:'rgb(255,3,3)'}}>{variant.heading}</span>
                                    <p>{variant.text}</p>
                                   </div>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default LetsGetYourApp


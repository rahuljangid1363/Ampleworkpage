import React from 'react'
import { Card } from 'react-bootstrap'

const BusinessOperations = () => {
    return (
        <div className='container-fluid py-5' style={{ backgroundColor: 'rgb(245,245,245)' }}>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <h4>Our Numbers Speaks For Our Business Operations</h4>
                    <div className='w-75'>
                        <p>We don’t compromise on the quality aspects thus it makes us the leading application development maintenance and support service provider. We resolve even the most severe incidents in less than 8 hours.</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {[
                        {
                            heading: '10-15 Mins',
                            text: 'Minimum Incident Response Time'
                        },
                        {
                            heading: '2-3 Hours',
                            text: 'Incident Solution Time'
                        },
                        {
                            heading: '350+',
                            text: 'Prowess Team Members'
                        },
                        {
                            heading: '100%',
                            text: 'With Quality Optimization'
                        },
                    ].map((variant, key) => (
                        <Card
                            key={key}
                            style={{ width: '15rem', backgroundColor: 'rgb(255,255,255)' }}
                            className="m-2 border-0 rounded-0"
                        >
                            <Card.Body>
                                <Card.Text className='text-center'>
                                    <h5 className='fw-bold' style={{ color: 'blue' }}>{variant.heading}</h5>
                                    <p style={{ fontSize: '0.85rem', fontWeight: '500' }}>{variant.text}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default BusinessOperations

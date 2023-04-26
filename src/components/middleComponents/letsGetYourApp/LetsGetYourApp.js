import React from 'react'
import { Card, Image } from 'react-bootstrap';
import "./LetsGetYourApp.css"
import circle from './asset/circle.png'
import arrow from './asset/arrow.png'
import whiteCircle from './asset/whiteCircle.svg'
import smallArrow from './asset/smallArrow.svg'
const card = [
    {
        logo: circle,
        logoChange: whiteCircle,
        heading: 'Fixed',
        text: 'Amplework softwarwe resultant in cost reduction by 30% to 40%.',
        headingChange: 'Solved',
        textChange: 'Our in-house support matrix and best-in-industry prices will resultant in cost reduction by 30% to 40%.',
        blueText: 'Amplework’s Solution'
    },
    {
        logo: circle,
        logoChange: whiteCircle,
        heading: 'Issue',
        text: 'Slow and glitch software updates with no-real benefits for users?',
        headingChange: 'Solved',
        textChange: 'Our in-house support matrix and best-in-industry prices will resultant in cost reduction by 30% to 40%.',
        blueText: 'Amplework’s Solution'
    },
    {
        logo: circle,
        logoChange: whiteCircle,
        heading: 'Issue',
        text: 'Need profound resources for program display visibility?',
        headingChange: 'Solved',
        textChange: 'Our in-house support matrix and best-in-industry prices will resultant in cost reduction by 30% to 40%.',
        blueText: 'Amplework’s Solution'
    },
]
const LetsGetYourApp = () => {
    return (
        <div className='container-fluid py-5' style={{ backgroundColor: 'rgb(250,250,250)',fontFamily:'Poppins' }}>
            <div className="container">
                <div className="row text-center justify-content-center">
                    <div className='w-75'>
                        <h4>Let's get your app in shape - contact us now and let the maintenance magic begin</h4>
                    </div>
                    <div className='w-75 '>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>

                <div className="row justify-content-center my-2">
                    {
                        card.map((variant, key) => (
                            <Card

                                key={key}
                                style={{ width: '20rem' }}
                                className="outerCard mx-4 py-3 mb-3 rounded text-center "
                            >
                                <div className='arrow'>
                                    <Image src={arrow} width='25px' />
                                </div>
                                <Card.Body>
                                    <div className='innerCard1 border rounded p-3' style={{ height: '13rem' }}>
                                        <div className='mb-2'>
                                            <Image src={variant.logo} width='45px' />
                                        </div>
                                        <span className='fw-semibold' style={{ color: 'rgb(255,3,3)' }}>{variant.heading}</span>
                                        <p style={{ fontSize: '0.9rem' }}>{variant.text}</p>
                                        <p className='text-primary fw-semibold'>{variant.blueText} <Image src={smallArrow} /> </p>
                                    </div>

                                    <div className='innerCard2 border rounded p-3' style={{ height: '13rem' }}>
                                        <div className='mb-2'>
                                            <Image src={variant.logoChange} width='45px' />
                                        </div>
                                        <span className='fw-semibold ' style={{ color: 'rgb(245,164,3)' }}>{variant.headingChange}</span>
                                        <p style={{ fontSize: '0.8rem' }} className='text-light'>{variant.textChange}</p>
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


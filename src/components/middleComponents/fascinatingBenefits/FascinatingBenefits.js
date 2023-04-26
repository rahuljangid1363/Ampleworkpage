import React from 'react'
import { Card, Image } from 'react-bootstrap'
import img1 from './asset/1.svg'
import img2 from './asset/2.svg'
import img3 from './asset/3.png'
import img4 from './asset/4.svg'
import img5 from './asset/5.svg'
import img6 from './asset/6.svg'
import "./FascinatingBenefits.css"
const RactangleCard = [
    {
        heading: 'Longer Life span',
        text: 'Rectifying errors quickly helps in enhancing the lifespan of mobile applications in a well-defined manner.',
        logo: img1
    },
    {
        heading: 'Bugs Removal',
        text: 'Bug removal is an essential part of software maintenance, as it helps to ensure that applications are functioning in a well-defined manner.',
        logo: img2
    },
    {
        heading: 'Upwards App Performance',
        text: 'When your application gets frequent maintenance at a consistent interval then it eventually follows upwards growth.',
        logo: img3
    },
    {
        heading: 'Security Management',
        text: 'Data security measures keep evolving to eliminate counterfeit measures - so make your apps profound with security management.',
        logo: img4
    },
    {
        heading: 'Data Management',
        text: 'User’s data is the most precious asset for your business and consistent maintenance empowers data management functions.',
        logo: img5
    },
    {
        heading: 'Reduced Tech Debts',
        text: 'By addressing issues and making updates in a timely manner, you can avoid accumulating technical issues.',
        logo: img6
    },
]
const FascinatingBenefits = () => {
    return (
        <div className='container-fluid py-4' style={{ backgroundColor: 'rgb(245,247,251)',fontFamily:'Poppins' }}>
            <div className="container">
                <div className="row text-center justify-content-center">
                    <div className=''>
                        <h4>Fascinating Benefits of Application Maintenance and Support Services</h4>
                    </div>
                    <div className='w-75'>
                        <p>Time to empower your mind with the fascinating benefits of application maintenance and support services. So, get ready to empower your mobile application growth with these foremost benefits.</p>
                    </div>
                </div>
                <div className="row justify-content-center py-4">
                    {
                        RactangleCard.map((variant, key) => (

                            <Card
                                key={key}
                                style={{ width: '30rem' }}
                                className="RactangleCard m-2 rounded-0 shadow border-0"
                            >
                                <Card.Body>
                                    <div className='d-flex'>
                                        <div>
                                            <p className='fw-semibold'>{variant.heading}</p>
                                            <p style={{ fontSize: '0.9rem' }} className='px-2'>{variant.text}</p>
                                        </div>
                                        <div className='align-items-center py-2 px-3 rounded' style={{ height: '5rem',backgroundColor:'rgb(233 241 255)' }}>
                                            <Image src={variant.logo} width='42rem' height='65rem' className='align-self-end' />
                                        </div>
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

export default FascinatingBenefits

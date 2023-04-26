import React from 'react'
import one from './asset/one.svg'
import two from './asset/tow.svg'
import three from './asset/three.svg'
import four from './asset/four.svg'
import { Card, Image } from 'react-bootstrap'
import './OurCoreCapability.css'
const OurCoreCards = [
    {
        photo: one,
        heading: 'Enterprise Development Solutions',
        Text: 'Our custom enterprise development solutions are designed to meet the ...',
        hoverText: 'Our mobile maintenance services are designed to ensure that your mobile applications are always up-to-date and functioning properly. We provide ongoing support and maintenance to keep your apps running smoothly and to address any issues that may arise.'
    }, {
        photo: two,
        heading: 'Security Management',
        Text: 'Our mobile application development services are focused on creating...',
        hoverText: 'Our mobile maintenance services are designed to ensure that your mobile applications are always up-to-date and functioning properly. We provide ongoing support and maintenance to keep your apps running smoothly and to address any issues that may arise.'
    }, {
        photo: three,
        heading: 'Developers For Hire',
        Text: 'Our developers for hire services provide you with access to topy...',
        hoverText: 'Our mobile maintenance services are designed to ensure that your mobile applications are always up-to-date and functioning properly. We provide ongoing support and maintenance to keep your apps running smoothly and to address any issues that may arise.'
    }, {
        photo: four,
        heading: 'Mobile Mantanance Service',
        Text: 'We provide Outgoing support and mantanance to resolving issue that may arise.',
        hoverText: 'Our mobile maintenance services are designed to ensure that your mobile applications are always up-to-date and functioning properly. We provide ongoing support and maintenance to keep your apps running smoothly and to address any issues that may arise.'
    }
]
const OurCoreCapability = () => {
    return (
        <div className='container-fluid pt-5 pb-3' style={{backgroundColor:'rgb(248 249 250)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className=''>
                            <h2>Our Core Capabilities</h2>
                            <p>Our core capabilities are rooted in delivering innovative and custom solutions that meet the unique needs of each of our clients.</p>
                        </div>
                    </div>
                    <div className="bg col-lg-6 d-flex flex-wrap justify-content-center">
                        {
                            OurCoreCards.map((item, key) => {
                                return (<Card
                                    key={key}
                                    style={{ width: '15rem' }}
                                    className="cards m-2"
                                >
                                    <Card.Body>
                                        <Image src={item.photo} className='image' />
                                        <p className='heading pt-2 fw-bold'>{item.heading}</p>
                                        <Card.Text className='pt-0'>
                                            {item.Text}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCoreCapability

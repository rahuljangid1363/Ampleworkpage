import React from 'react'
import Card from 'react-bootstrap/Card';
import "./TypesOfAppMaintain.css"
import img1 from './asset/1.png'
import img2 from './asset/2.png'
import img3 from './asset/3.png'
import img4 from './asset/4.png'
import img5 from './asset/5.png'
import img6 from './asset/6.png'
import img7 from './asset/7.png'
import img8 from './asset/8.png'
import { Image } from 'react-bootstrap';
const AppMaintainCardData = [
    {
        logo: img1,
        text: 'Web Apps',
        paragraph: 'We conduct maintenance of applications that run within a web browser and can be accessed through the internet.'
    },
    {
        logo: img2,
        text: 'Cloud Apps & SaaS',
        paragraph: 'We conduct maintenance of applications that run within a web browser and can be accessed through the internet.'
    },
    {
        logo: img3,
        text: 'Enterprise Apps',
        paragraph: 'We conduct maintenance of applications that run within a web browser and can be accessed through the internet.'
    },
    {
        logo: img4,
        text: 'AR/VR Apps',
        paragraph: 'We conduct maintenance of applications that run within a web browser and can be accessed through the internet.'
    },
    {
        logo: img5,
        text: 'Database Apps',
        paragraph: 'We conduct maintenance of applications that run within a web browser and can be accessed through the internet.'
    },
    {
        logo: img6,
        text: 'AI/ML Apps',
        paragraph: 'We conduct maintenance of applications that run within a web browser and can be accessed through the internet.'
    },
    {
        logo: img7,
        text: 'Gamming Apps',
        paragraph: 'We conduct maintenance of applications that run within a web browser and can be accessed through the internet.'
    },
    {
        logo: img8,
        text: 'Hybrid Apps',
        paragraph: 'We conduct maintenance of applications that run within a web browser and can be accessed through the internet.'
    },

]

const TypesOfAppMaintain = () => {
    return (
        <div className='container-fluid py-5' style={{fontFamily:'Poppins'}}>
            <div className="container">
                <div className="row text-center">
                    <p style={{ color: 'rgb(245,164,3)', fontSize: '0.8rem', letterSpacing: '0.15rem' }} className='text-uppercase pt-3 fw-semibold'>
                        Keep Your Applications Always Shine
                    </p>
                    <h4>Types of Apps We Maintain At Amplework Software</h4>
                    <p className='px-md-5 pt-2 text-secondary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <div className="row mb-2 justify-content-center">
                    {
                        AppMaintainCardData.map((variant, key) => {
                            return (<>
                                <Card
                                    key={key}
                                    style={{ width: '15rem' }}
                                    className="ZoomCard m-3 border-0 shadow "
                                >
                                    <Card.Body>
                                        <div className='defaultShow'>
                                            <div className='cardImage text-center'>
                                                <Image src={variant.logo} width='80rem'/>
                                            </div>  
                                            <Card.Text className='text-center fw-semibold  my-4'>
                                                {variant.text}
                                            </Card.Text>
                                        </div>

                                        <div className='hoverShow'>
                                            <Card.Text>
                                               <p className='text-center '> {variant.text}</p>
                                                <p className='paragraph text-center'>{variant.paragraph}</p>
                                            </Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </>)
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default TypesOfAppMaintain

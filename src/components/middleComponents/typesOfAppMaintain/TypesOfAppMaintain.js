import React from 'react'
import Card from 'react-bootstrap/Card';
import "./TypesOfAppMaintain.css"
import { FcBullish, FcClapperboard, FcSmartphoneTablet, FcMultipleInputs, FcPrivacy, FcSelfServiceKiosk, FcUnlock, FcVoicemail, } from "react-icons/fc";
const AppMaintainCardData = [
    {
        logo: FcBullish(),
        text: 'Web Apps'
    },
    {
        logo: FcClapperboard(),
        text: 'Cloud Apps & SaaS'
    },
    {
        logo: FcMultipleInputs(),
        text: 'Enterprise Apps'
    },
    {
        logo: FcPrivacy(),
        text: 'AR/VR Apps'
    },
    {
        logo: FcSelfServiceKiosk(),
        text: 'Database Apps'
    },
    {
        logo: FcUnlock(),
        text: 'AI/ML Apps'
    },
    {
        logo: FcVoicemail(),
        text: 'Gamming Apps'
    },
    {
        logo: FcSmartphoneTablet(),
        text: 'Hybrid Apps'
    },

]

const TypesOfAppMaintain = () => {
    return (
        <div className='container-fluid py-5'>
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
                                    className="ZoomCard m-2 border-0 shadow "
                                >
                                    <Card.Body>
                                        <h1 className='text-center' style={{fontSize:'4rem'}}>{variant.logo}</h1>
                                        <Card.Text className='text-center fw-semibold my-4'>
                                           {variant.text}
                                        </Card.Text>
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

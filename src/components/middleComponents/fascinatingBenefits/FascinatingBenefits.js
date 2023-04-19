import React from 'react'
import { Card } from 'react-bootstrap'
import { GoCalendar,GoOrganization ,GoRepoClone,GoGift,GoFileSubmodule,GoDeviceMobile} from "react-icons/go";
import "./FascinatingBenefits.css"
const RactangleCard = [
    {
        heading: 'Longer Life span',
        text: 'Rectifying errors quickly helps in enhancing the lifespan of mobile applications in a well-defined manner.',
        logo: GoCalendar()
    },
    {
        heading: 'Bugs Removal',
        text: 'Bug removal is an essential part of software maintenance, as it helps to ensure that applications are functioning in a well-defined manner.',
        logo: GoRepoClone()
    },
    {
        heading: 'Upwards App Performance',
        text: 'When your application gets frequent maintenance at a consistent interval then it eventually follows upwards growth.',
        logo: GoOrganization()
    },
    {
        heading: 'Security Management',
        text: 'Data security measures keep evolving to eliminate counterfeit measures - so make your apps profound with security management.',
        logo: GoGift()
    },
    {
        heading: 'Data Management',
        text: 'User’s data is the most precious asset for your business and consistent maintenance empowers data management functions.',
        logo: GoFileSubmodule()
    },
    {
        heading: 'Reduced Tech Debts',
        text: 'By addressing issues and making updates in a timely manner, you can avoid accumulating technical issues.',
        logo: GoDeviceMobile()
    },
]
const FascinatingBenefits = () => {
    return (
        <div className='container-fluid py-5 ' style={{ backgroundColor: 'rgb(245,247,251)' }}>
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
                        RactangleCard.map((variant,key) => (
                      
                            <Card
                                key={key}
                                style={{ width: '30rem' }}
                                className="RactangleCard m-2 rounded-0 shadow border-0"
                            >
                                <Card.Body>
                                    <div className='d-flex'>
                                        <div>
                                            <p className='fw-semibold'>{variant.heading}</p>
                                            <p>{variant.text}</p>
                                        </div>
                                        <div className='RactangleCardSubComponent px-3 py-2 rounded align-self-center'>
                                           <h3> {variant.logo}</h3>
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

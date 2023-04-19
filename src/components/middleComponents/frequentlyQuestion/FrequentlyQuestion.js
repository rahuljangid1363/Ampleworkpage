import React from 'react'
import { Accordion } from 'react-bootstrap'
import './FrequentlyQuestion.css'
const FrequentlyQuestion = () => {
    return (
        <div className='FrequentlyQuestion container-fluid py-5'>
            <div className="contianer">
                <div className="row">
                    <h3 className='text-center my-3'>Frequently Asked Questions</h3>
                </div>
                <div className="row justify-content-center  ">
                    <div className="col-md-6" style={{ width: '28rem' }}>
                        <Accordion>
                            <Accordion.Item eventKey="0" className='border-0 shadow mb-3 '>
                                <Accordion.Header><span className='fw-semibold'>How skilled are your dedicated developers?</span></Accordion.Header>
                                <Accordion.Body>
                                    At Amplework, we feature a team of highly
                                    skilled and experienced dedicated developers
                                    having several years of expertise in the field of mobile app
                                    development solutions.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='border-0 shadow mb-3 rounded'>
                                <Accordion.Header><span className='fw-semibold'>How skilled are your dedicated developers?</span></Accordion.Header>
                                <Accordion.Body>
                                    At Amplework, we feature a team of highly
                                    skilled and experienced dedicated developers
                                    having several years of expertise in the field of mobile app
                                    development solutions.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='border-0 shadow mb-3 rounded'>
                                <Accordion.Header><span className='fw-semibold'>How skilled are your dedicated developers?</span></Accordion.Header>
                                <Accordion.Body>
                                    At Amplework, we feature a team of highly
                                    skilled and experienced dedicated developers
                                    having several years of expertise in the field of mobile app
                                    development solutions.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='border-0 shadow mb-3 rounded'>
                                <Accordion.Header><span className='fw-semibold'>How skilled are your dedicated developers?</span></Accordion.Header>
                                <Accordion.Body>
                                    At Amplework, we feature a team of highly
                                    skilled and experienced dedicated developers
                                    having several years of expertise in the field of mobile app
                                    development solutions.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="col-md-6" style={{ width: '28rem' }}>
                    <Accordion>
                            <Accordion.Item eventKey="0" className='border-0 shadow mb-3 rounded'>
                                <Accordion.Header><span className='fw-semibold'>How skilled are your dedicated developers?</span></Accordion.Header>
                                <Accordion.Body>
                                    At Amplework, we feature a team of highly
                                    skilled and experienced dedicated developers
                                    having several years of expertise in the field of mobile app
                                    development solutions.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='border-0 shadow mb-3 rounded'>
                                <Accordion.Header><span className='fw-semibold'>How skilled are your dedicated developers?</span></Accordion.Header>
                                <Accordion.Body>
                                    At Amplework, we feature a team of highly
                                    skilled and experienced dedicated developers
                                    having several years of expertise in the field of mobile app
                                    development solutions.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='border-0 shadow mb-3 rounded'>
                                <Accordion.Header><span className='fw-semibold'>How skilled are your dedicated developers?</span></Accordion.Header>
                                <Accordion.Body>
                                    At Amplework, we feature a team of highly
                                    skilled and experienced dedicated developers
                                    having several years of expertise in the field of mobile app
                                    development solutions.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='border-0 shadow mb-3 rounded'>
                                <Accordion.Header><span className='fw-semibold'>How skilled are your dedicated developers?</span></Accordion.Header>
                                <Accordion.Body>
                                    At Amplework, we feature a team of highly
                                    skilled and experienced dedicated developers
                                    having several years of expertise in the field of mobile app
                                    development solutions.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrequentlyQuestion

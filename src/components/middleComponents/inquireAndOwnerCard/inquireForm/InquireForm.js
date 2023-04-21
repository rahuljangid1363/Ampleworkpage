import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { BiUser } from "react-icons/bi";
import { AiOutlineMail, AiOutlineGitlab } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillTelephoneFill, BsCurrencyDollar, BsFillPlusCircleFill } from "react-icons/bs";
import Captcha from './assets/captcha.png'
import { FloatingLabel, Image, InputGroup } from 'react-bootstrap';
function InquireForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3 pt-4">

                <Form.Group as={Col} md="6" controlId="validationCustomUsername" >
                    <InputGroup hasValidation >
                        <InputGroup.Text id="inputGroupPrepend"
                            className=' border-0 border-bottom border-dark rounded-0' style={{ backgroundColor: 'white' }}>
                            <BiUser className='text-warning ' />
                        </InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Name*"
                            aria-describedby="inputGroupPrepend"
                            required
                            className='border-0 border-bottom border-1 rounded-0 border-dark  '
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend"
                            className=' border-0 border-bottom border-dark rounded-0' style={{ backgroundColor: 'white' }}>
                            <AiOutlineMail className='text-warning  ' /></InputGroup.Text>
                        <Form.Control
                            type="email"
                            placeholder="Email Address*"
                            aria-describedby="inputGroupPrepend"
                            required
                            className='border-0 border-bottom border-1 rounded-0 border-dark  '
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your email id.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

            </Row>


            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend"
                            className=' border-0 border-bottom border-dark rounded-0' style={{ backgroundColor: 'white' }}>
                            <BsFillTelephoneFill className=' text-warning ' /></InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Mobile Number*"
                            aria-describedby="inputGroupPrepend"
                            required
                            className='border-0 border-bottom border-1 rounded-0 border-dark  '
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your mobile number.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>



                <Form.Group as={Col} md="6" controlId="validationCustom02" className='d-flex'>
                    <InputGroup.Text id="inputGroupPrepend"
                        className=' border-0 border-bottom border-dark rounded-0' style={{ backgroundColor: 'white' }}>
                        <AiOutlineGitlab className='text-warning ' /></InputGroup.Text>
                    <Form.Select aria-label="Default select example"
                        className=' text-secondary border-0 border-bottom border-1 rounded-0 border-dark  '>
                        <option>Interested In*</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
            </Row>


            <Row className="mb-3">

                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend"
                            className=' border-0 border-bottom border-dark rounded-0' style={{ backgroundColor: 'white' }}>
                            <MdOutlineMailOutline className=' text-warning ' /></InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Skype Id/Whatsapp Number*"
                            aria-describedby="inputGroupPrepend"
                            required
                            className='border-0 border-bottom border-1 rounded-0 border-dark  '
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your skype Id/Whatsapp Numberr.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>


                <Form.Group as={Col} md="6" controlId="validationCustom02" className='d-flex'>
                    <InputGroup.Text id="inputGroupPrepend"
                        className=' border-0 border-bottom border-dark rounded-0' style={{ backgroundColor: 'white' }}>
                        <BsCurrencyDollar className='text-warning ' /></InputGroup.Text>
                    <Form.Select aria-label="Default select example"
                        className=' text-secondary border-0 border-bottom border-1 rounded-0 border-dark  '>
                        <option>Select Your Budget</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
            </Row>




            <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom03" className='' >
                    <Form.Label style={{ fontSize: '0.9rem' }} className='fw-semibold text-secondary'>
                        <MdOutlineMailOutline className=' text-warning ' /> MESSAGE*</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" >
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group controlId="formFile" as={Col} md='3' className="mb-3 d-flex">
                    <BsFillPlusCircleFill className='align-self-center fw-bold fs-5  text-primary ' />
                    <Form.Control type="file" />
                </Form.Group>

                <Form.Group as={Col} md="9" className="mb-3 align-self-center " style={{ fontSize: '0.9rem' }}>
                    <Form.Check
                        required
                        label="Yes, Send me a mutual NDA (Non-Disclosure Agreement)"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
            </Row>






            <Row className="mb-3">
                <Col as={Col} md="6" className=' py-2'>
                    <Row className='p-3 shadow'>
                        <Col sm="12" className='align-self-center text-secondary text-center bg-primary.'>
                            <div className='d-flex justify-content-between'>
                                <div><input type="checkbox" /><span className='px-2'>I'm not a robot</span></div>
                                <div> <Image src={Captcha} style={{ width: '2rem' }} /></div>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col as={Col} md="6" className=' text-center align-self-center'>
                    <Button type="submit" className='rounded-0 fw-semibold text-light px-3 py-2 border-0'
                        style={{ backgroundColor: 'rgb(245,164,3)' }}>Send Your Inquiry</Button>
                </Col>

            </Row>
        </Form>
    );
}

export default InquireForm;
import React from 'react'
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import logo from '../../../assets/logo/amplworkLogo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from "react-bootstrap";
import "./HomeNavAndWelcome.css"

import mobility from './asset/mobility.svg'
import web from './asset/web.svg'
import cloud from './asset/cloud.svg'
import ui from './asset/ui.svg'
import devops from './asset/dev.svg'
import testing from './asset/bug.svg'
import analy from './asset/analytices.svg'
import blockchain from './asset/blockchain.svg'
import iot from './asset/iot.svg'


const HomeNavAndWelcome = () => {
    let Mystyle = ({ isActive }) => ({
        textDecoration: 'none',
        fontWeight: '600',
        color: isActive ? ' rgb(255, 255, 255)' : 'rgb(254,254,254)',
        borderBottom: isActive ? "1px solid white" : '',
        padding: '7px',
        hover: {
            color: 'red'
        }
    });
    return (
        <div className='HomeNavAndWelcome container-fluid'>
            <Navbar expand="lg" className="pt-0 pb-5">
                {/* <Container> */}
                <Navbar.Brand href="#home" >
                    <Image src={logo} className="img-fluid" width='230' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="NavLinks ms-auto ">
                        <NavLink to="/who-we-are" style={Mystyle}><li>Who we are</li></NavLink>
                        <NavLink to="/what-we-do" style={Mystyle}><li>What we do</li></NavLink>
                        <NavLink to="/our-culture" style={Mystyle}><li>Our culture</li></NavLink>
                        <NavLink to="/work-with-us" style={Mystyle}><li>Work with us</li></NavLink>
                        <NavLink to="/case-studies" style={Mystyle}><li>Case studies</li></NavLink>
                        <NavLink to="/blog" style={Mystyle}><li>Blog</li></NavLink>
                        <NavLink to="/contact-us" style={Mystyle}><li>Contact us</li></NavLink>

                    </Nav>
                    <Nav>
                        <Nav.Link href="/inquire-now">
                            <Button

                                className="Button rounded-pill fw-bold text-uppercase"
                            >
                                inquire now
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>




            {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
            <div className=" row  justify-content-center pt-5">
                <p
                    className="text-uppercase text-center pt-5 fw-bold mb-0"
                    style={{ fontSize: "1.2rem", color: 'rgb(245 164 3)', letterSpacing: '0.18rem' }}
                >
                    your product is more then just a project
                </p>
                <p className="text-center fs-2 col-11 text-light fw-semibold"
                    style={{ wordSpacing: '0.20rem', letterSpacing: '0.1rem' }}>
                    Boost your idea with an inspired dream team
                </p>
                <h2 className='text-center text-light'>Who can communicated well and keep your
                    <span className='border-bottom border-light px-2'>CODE DOCUMENTED</span></h2>
            </div>
            <div className="text-center pt-5 pb-3">
                <Button variant='primary' className="fw-semibold px-3 border-0 text-light py-3 fs-5">
                    See why we're worth it
                </Button>
            </div>
            <div className="pb-5"></div>


            <div className="row pt-5 pb-4 justify-content-around">
                <div className="col-1 text-center ">
                    <Image src={mobility} className='img-fluid' />
                    <p className=' text-primary pt-2' style={{ letterSpacing: '0.15rem' }}>MOBILITY</p>
                </div>

                <div className="col-1 text-center">
                    <Image src={web} className='img-fluid' />
                    <p className=' text-primary pt-2' style={{ letterSpacing: '0.15rem' }}>WEB</p>
                </div>

                <div className="col-1 text-center">
                    <Image src={cloud} className='img-fluid' />
                    <p className=' text-primary pt-2' style={{ letterSpacing: '0.15rem' }}>CLOUD</p>
                </div>

                <div className="col-1 text-center">
                    <Image src={ui} className='img-fluid' />
                    <p className=' text-primary pt-2' style={{ letterSpacing: '0.15rem' }}>UI/UX</p>
                </div>

                <div className="col-1 text-center">
                    <Image src={devops} className='img-fluid' />
                    <p className=' text-primary pt-2' style={{ letterSpacing: '0.15rem' }}>DEVOPS</p>
                </div>

                <div className="col-1 text-center">
                    <Image src={testing} className='img-fluid' />
                    <p className=' text-primary pt-2' style={{ letterSpacing: '0.15rem' }}>TESTING</p>
                </div>

                <div className="col-1 text-center">
                    <Image src={analy} className='img-fluid' />
                    <p className=' text-primary pt-2' style={{ letterSpacing: '0.15rem' }}>ANALYTIC</p>
                </div>

                <div className="col-1 text-center">
                    <Image src={blockchain} className='img-fluid' />
                    <p className=' text-primary pt-3' style={{ letterSpacing: '0.15rem' }}>BLOCKCHAIN</p>
                </div>

                <div className="col-1 text-center">
                    <Image src={iot} className='img-fluid' />
                    <p className=' text-primary pt-2 ' style={{ letterSpacing: '0.15rem' }}>IOT</p>
                </div>

            </div>
        </div>
    )
}

export default HomeNavAndWelcome

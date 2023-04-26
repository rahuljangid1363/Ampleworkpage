import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { SiBookstack } from "react-icons/si";
import { BsFillPeopleFill, BsBarChartLine, BsStopwatch } from "react-icons/bs";
import SantoshSir from './asset/santosh.png'
import PrakashSir from './asset/prakash.png'
import './OwnerDetailsCard.css'
import NovaMem from './asset/nova.png'
const OwnerDetailsCard = () => {
  return (
    <div>
      <Row className='text-center pt-4'>
        <h5 className='text-start text-light'>Quick Stats</h5>
        <Col sm='6'>
          <div className='d-flex justify-content-center'>
            <div className='heading'>
              170+</div>
            <div className=' align-self-center px-2'> <SiBookstack className='text-light fs-1' /></div>
          </div>
          <p className='about'>Successful Projects</p>
        </Col>

        <Col sm='6'>
          <div className='d-flex justify-content-center'>
            <div className='heading'>
            92% </div>
            <div className=' align-self-center px-2'> <BsFillPeopleFill className='text-light fs-1' /></div>
          </div>
          <p className='about '>Client retention</p>
        </Col>
      </Row>


      <Row className='text-center pt-3'>
      <Col sm='6'>
          <div className='d-flex  justify-content-center'>
            <div className='heading'>
            $200M+ </div>
            <div className=' align-self-center px-2'> <BsBarChartLine className='text-light fs-1' /></div>
          </div>
          <p className='about'>Our clients overall revenue</p>
        </Col>

        <Col sm='6'>
          <div className='d-flex justify-content-center'>
            <div className='heading'>
            1M+</div>
            <div className=' align-self-center px-2'> <BsStopwatch className='text-light fs-1' /></div>
          </div>
          <p className='about '>Work hours</p>
        </Col>
      </Row>



      <h5 className='text-light mt-3 '>Top Executives</h5>
      <Row className='text-center my-4   '>
        <Col xm='4'>
          <Image src={SantoshSir} className='img-fluid' width='80%' />
          <p className='about pt-2'>Santosh Singh</p>
          <p className='about' style={{lineHeight:'1px'}}>CEO</p>
        </Col>
        <Col xm='4'>
          <Image src={PrakashSir} className='img-fluid' width='80%' />
          <p className='about pt-2'>Prakash Saini</p>
          <p className='about' style={{lineHeight:'1px'}}>CTO</p>
        </Col>
        <Col xm='4'>
          <Image src={NovaMem} className='img-fluid' width='80%' />
          <p className='about pt-2'>Supernova C.</p>
          <p className='about' style={{lineHeight:'1px'}}>CXO</p>
        </Col>
      </Row>
    </div>
  )
}

export default OwnerDetailsCard

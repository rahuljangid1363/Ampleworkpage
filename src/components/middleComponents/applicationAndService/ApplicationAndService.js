import React from 'react'
import { Button } from "react-bootstrap";
import ApplicationCards from './ApplicationCards';
import imgOne from './asset/one.svg'
import imgTwo from './asset/two.svg'
import imgThree from './asset/three.svg'
const ApplicationAndService = () => {
  return (
    <div className="container-fluid" style={{ fontFamily: 'Poppins' }}>
      <div className="container">
        <h3 className="text-center px-5 pt-4">
          Our Advanced Application Support Service - Elevate Your Application's
          Performance
        </h3>
        <p className="text-center  px-5 pt-2 ">
          Complex application which are configured with the latest APIs require
          the advanced solutios to keep the working machanism of the
          applications in a perfect shape. At Amplework.
        </p>
        <div className="row text-light">
          <div
            className="col-lg-4  py-4"
            style={{ backgroundColor: "rgb(47, 126, 255)" }}
          >

            <ApplicationCards
              prop={{
                heading: "Application Re-engineering",
                logo: imgOne,
                text: `Our developers evaluate existing applications through a series of in-house testing processes in order to evaluate 
    the functionalities of the applications that need to be re-engineered,`,
                bgColor: "",
              }}
            />
          </div>
          <div
            className="col-lg-4 py-4"
            style={{ backgroundColor: "rgb(17, 95, 224)" }}
          >
            <ApplicationCards
              prop={{
                heading: "Application Migration & Intergration",
                logo: imgTwo,
                text: `Our Engineers are profound in supporting you for moving applications from physical or local settings to remote based servers.We also provide application migration as well as integration services.`,
                bgColor: "",
              }}
            />
          </div>
          <div
            className="col-lg-4  py-4"
            style={{ backgroundColor: "rgb(4, 80, 206)" }}
          >
            <ApplicationCards
              prop={{
                heading: "Application Support",
                logo: imgThree,
                text: `It includes a range of activities for ensuring proper functioning and optmization of a web or mobile application.We focus towards continuous monitoring and continous improverment of functions.`,
                bgColor: "",
              }}
            />
          </div>
        </div>
        <div className="row justify-content-center my-4 ">
          <div className="col text-center">
            <Button variant="warning" className="rounded-0 text-light fw-semibold">GET A FREE QUOTE</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationAndService

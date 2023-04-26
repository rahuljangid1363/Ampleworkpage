import React from "react";
import { Button } from "react-bootstrap";
import "./WelcomeHome.css"
const WelcomeHome = () => {
  return (
    <div className="WelcomeHome container-fluid bg-dark  pb-5 pt-5">
      <div className=" row  justify-content-center pt-5">
        <p
          className="TopHeading text-uppercase text-warning text-center pt-5 fw-semibold mb-0"
        >
          application mantainance and support
        </p>
        <p className="text-center fs-2 col-12 text-light fw-semibold" >
          Top class application mantainace and support services for
          error-free, hight performing applications
        </p>
      </div>
      <div className="text-center pb-5">
        <Button  className="Schdule fw-semibold px-3 border-0 text-dark">
          Schdule a call
        </Button>
      </div>
      <div className="pb-5"></div>
    </div>
  );
};

export default WelcomeHome;

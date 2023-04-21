import React from "react";
import { Button } from "react-bootstrap";
import "./WelcomeHome.css"
const WelcomeHome = () => {
  return (
    <div className="container-fluid  pb-5 pt-3">
      <div className=" row  justify-content-center pt-3">
        <p
          className="text-uppercase text-warning text-center pt-5 fw-semibold mb-0"
          style={{ fontSize: "1rem" }}
        >
          application mantainance and support
        </p>
        <p className="text-center fs-2 col-11 text-light fw-semibold" >
          Top class application mantainace <span className="px-2">and</span> support services for
          error-free, hight performing applications
        </p>
      </div>
      <div className="text-center pb-5">
        <Button style={{ backgroundColor: 'rgb(245 164 3)' }} className="fw-semibold px-3 border-0 text-dark">
          Schdule a call
        </Button>
      </div>
      <div className="pb-5"></div>
    </div>
  );
};

export default WelcomeHome;

import React from "react";
import { Button } from "react-bootstrap";
import "./WelcomeHome.css"
const WelcomeHome = () => {
  return (
    <div className="container-fluid  py-5">
        <div className=" row  justify-content-center pt-3">
          <p
            className="text-uppercase text-warning text-center pt-5 fw-semibold mb-0"
            style={{ fontSize: "1rem" }}
          >
            application mantainance and support
          </p>
          <p className="text-center fs-3 col-8 text-light fw-semibold">
            Top classs application mantainace and support service for
            error-free, hight performing applications
          </p>
        </div>
        <div className="text-center pb-5">
          <Button variant="warning" className="fw-semibold px-3">
            Schdule a call
          </Button>
        </div>
    </div>
  );
};

export default WelcomeHome;

import React from "react";
import { FaRegSun, FaLaptopCode, FaGreaterThanEqual } from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import { Button } from "react-bootstrap";
const ApplicationService = () => {
  return (
    <div className="container-fluid">
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
            <ServiceCard
              prop={{
                heading: "Application Re-engineering",
                logo: FaRegSun(),
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
            <ServiceCard
              prop={{
                heading: "Application Migration & Intergration",
                logo: FaLaptopCode(),
                text: `Our Engineers are profound in supporting you for moving applications from physical or local settings to remote based servers.We also provide application migration as well as integration services.`,
                bgColor: "",
              }}
            />
          </div>
          <div
            className="col-lg-4  py-4"
            style={{ backgroundColor: "rgb(4, 80, 206)" }}
          >
            <ServiceCard
              prop={{
                heading: "Application Support",
                logo: FaGreaterThanEqual(),
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
  );
};

export default ApplicationService;

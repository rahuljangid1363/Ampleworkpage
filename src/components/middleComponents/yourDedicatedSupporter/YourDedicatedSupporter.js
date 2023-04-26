import React from "react";
import "./YourDedicatedSupporter.css"
import { Image } from "react-bootstrap";
import img from './asset/icons.svg'
const YourDedicatedSupporter = () => {
  return (
    <div className="container-fluid py-5" style={{fontFamily:'Poppins'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-5 offset-md-1">
             <Image src={img} className="img-fluid" width='90%'/>
            </div>
          <div className="col-md-6">
            <span className="text-primary fw-bold" >Amplework software</span>
            <h4>Your Dedicated Supporter for App Maintenance Services</h4>
            <p className="pt-2">
              App Maintenance is a critical aspect because it effectively keeps
              the applications functioning in a optimized manner so that it can
              fulfil your audience's requirement. At Amplework, we can support
              you in almost everything from bg fixes to security patches. Our
              prowess developers ensure that the application should stay secure
              and up-to-date.
            </p>
            <p>
              App maintenance is a critical aspect because it efectively keeps
              the application functioning in an optmized manner so that it so
              that is can fulfill your audience's requirement. At Amplework, we
              can support you in almost everything from bug fixes to security
              patches.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourDedicatedSupporter;

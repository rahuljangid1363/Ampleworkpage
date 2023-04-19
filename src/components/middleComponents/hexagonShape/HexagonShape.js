import React from "react";
import "./hexagonShape.css"
const HexagonShape = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row d-flex">
              <div className="col hexagonShape bg-danger">
                skkfhshfshfsfh
              </div>
              <div className="col hexagonShape bg-warning">applicatiin</div>
            </div>
            <div className="row d-flex">
              <div className="col hexagonShape bg-warning">applicatiin</div>
            </div>
          </div>
          <div className="col-md-6">
            <span className="text-primary fw-bold" >Amplework software</span>
            <h4>Your Dedicated Supporter for App Maintenance Services</h4>
            <p className="pt-2 fw-semibold">
              App Maintenance is a critical aspect because it effectively keeps
              the applications functioning in a optimized manner so that it can
              fulfil your audience's requirement. At Amplework, we can support
              you in almost everything from bg fixes to security patches. Our
              prowess developers ensure that the application should stay secure
              and up-to-date.
            </p>
            <p className="fw-semibold">
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

export default HexagonShape;

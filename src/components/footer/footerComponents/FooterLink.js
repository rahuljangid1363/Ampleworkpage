import React from "react";
import "./footerCard.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { dmca_badge } from ".";
const FooterLink = () => {
  return (
    <div>
      <div className="container-fluid bg-dark">
        <div className="container">
          <div className="row pt-4">
            <div className="col-lg-3 col-md-6">
              <ul className="yellowListHover">
                <h5 className="text-light fw-semibold">
                  Development Services{" "}
                </h5>
                <li>Product Design</li>
                <li>MVP Development</li>
                <li>Continuous Product Development</li>
                <li>DevOps Solutions</li>
                <li>Architecture Consulting</li>
                <li>Mobile Application Development</li>
                <li>Enterprise Web Development</li>
                <li>Voice/Alexa App Development</li>
                <li>IoT App Development</li>
                <li>Blockchain App Development</li>
                <li>Ai BOT Development</li>
                <li>Mobile app maintenance</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <ul className="yellowListHover">
                <h5 className="text-light fw-semibold">Dedicated Resources </h5>
                <li>Hire Swift Developer</li>
                <li>Hire iOS/iPhone Developer</li>
                <li>Hire Flutter Developer</li>
                <li>Hire React Native Developer</li>
                <li>Hire Android Developer</li>
                <li>Hire Angular Developer</li>
                <li>Hire Node.js Developer</li>
                <li>Hire Vue.js Developer</li>
                <li>Hire React.js Developer</li>
                <li>Hire Laravel Developer</li>
                <li>Hire Golang Developer</li>
                <li>Hire Full Stack developer</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <ul className="yellowListHover">
                <h5 className="text-light fw-semibold">Industry Solutions</h5>
                <li>Fitness Sector</li>
                <li>Wellness Area</li>
                <li>Health Services</li>
                <li>Food &amp; Hyperlocal </li>
                <li>eLearning Solution</li>
                <li>Social &amp; Dating</li>
                <li>Travel &amp; Holidays</li>
                <li>Fintech Solutions</li>
                <li>Ecomm &amp; Marketplace</li>
                <li>Jobs &amp; Employment</li>
                <li>Real Estate Sector</li>
                <li>Software Maintenance And Support</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <ul className="yellowListHover">
                <h5 className="text-light fw-semibold">Enterprise </h5>
                <li>On Demand App Development</li>
                <li>Field Sales &amp; Services</li>
                <li>Document Management</li>
                <li>Hipaa Compliances</li>
                <li>Software Testing Services</li>
                <li>Logistic &amp; Distribution</li>
                <li>Enterprise App Integration</li>
                <li>Cloud Infrastructure</li>
                <li>Business Intelligence</li>
                <li>Enterprise Mobility</li>
                <li>Staff Augmentation Services</li>
                <li>Inspection App Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="container">
          <div className="row pt-3 ">
            <div className="col-lg-7">
              <ul className="d-flex text-light flex-wrap justify-content-center  ">
                <li className="px-2">About Us</li>
                <li className="px-2">Services</li>
                <li className="px-2">Career</li>
                <li className="px-2">Contact Us</li>
                <li className="px-2">Blog</li>
                <li className="px-2">Privacy Policy</li>
                <li className="px-2">Legal</li>
              </ul>
            </div>
            <div className="col-lg-2 d-flex pb-2 justify-content-center offset-lg-3 ">
              <div className="px-2">
                <FaFacebookF className="text-light fs-5 " />
              </div>
              <div className="px-2">
                {" "}
                <FaLinkedinIn className="text-light fs-4" />
              </div>
              <div className="px-2">
                {" "}
                <FaTwitter className="text-light fs-4 " />
              </div>
              <div className="px-2">
                <FaInstagram className="text-light fs-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
      <div
        className="container-fluid"
        style={{ backgroundColor: "rgb(255, 176, 4)" }}
      >
        <div className="container">
          <div className="row py-2 ">
            <div
              className="col-lg-6 py-2 d-flex justify-content-around flex-wrap text-light fw-semibold align-items-center"
              style={{ fontSize: "1.05rem" }}
            >
              <div>
                Amplework <AiOutlineCopyrightCircle className="fs-5" /> 2023 All Right Reserved </div>
              <div>
                <img src={dmca_badge} className="img-fluid" alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 d-flex flex-wrap py-2 justify-content-center text-light fw-semibold align-items-center"
              style={{ fontSize: "0.87rem" }}
            >
              <div className="border-2  border-end px-1">USA</div>
              <div className="border-2  border-end px-1">UK</div>
              <div className="border-2  border-end px-1">Canada</div>
              <div className="border-2  border-end px-1">Canada</div>
              <div className="border-2  border-end px-1">Austrilia</div>
              <div className="border-2  border-end px-1">Norway</div>
              <div className="border-2  border-end px-1">Germony</div>
              <div className="border-2  border-end px-1">France</div>
              <div className="border-2  border-end px-1">Sweden</div>
              <div className="px-2">Poland</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLink;

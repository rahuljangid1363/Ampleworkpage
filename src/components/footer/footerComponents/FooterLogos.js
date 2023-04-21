import React from 'react'
import { aws_consulting_partner, d_b_register, footerLogo, google_cloud_partner, iso } from '.'
const FooterLogos = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-5 ">
            <div className="row justify-content-end">
              <div className="col-10 pb-4 bg-anger">
                <img
                  src={footerLogo}
                  alt=""
                  className="img-fluid"
                  width="80%"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-7  ">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col text-center">
                    <img src={iso} alt="" className="img-fluid" />
                    <p
                      className="text-primary text-center fw-semibold pt-2"
                      style={{ fontSize: "0.91rem" }}
                    >
                      ISO-27001 Software Security
                    </p>
                  </div>
                  <div className="col text-center">
                    <img src={d_b_register} alt="" className="img-fluid" />
                    <p
                      className="text-primary text-center fw-semibold pt-2"
                      style={{ fontSize: "0.91rem" }}
                    >
                      Dun & Bradstreet Verified
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="row">
                  <div className="col text-center ">
                    <img
                      src={google_cloud_partner}
                      alt=""
                      className="img-fluid"
                    />
                    <p
                      className="text-primary fw-semibold pt-2"
                      style={{ fontSize: "0.91rem" }}
                    >
                      Google Cloud Partner
                    </p>
                  </div>
                  <div className="col text-center">
                    <img
                      src={aws_consulting_partner}
                      alt=""
                      className="img-fluid"
                    />
                    <p
                      className="text-primary text-center fw-semibold pt-2"
                      style={{ fontSize: "0.91rem" }}
                    >
                      AWS Consulting Partner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterLogos

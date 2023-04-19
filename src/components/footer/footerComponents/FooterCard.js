import React from "react";
import Card from "react-bootstrap/Card";

import "./footerCard.css";
const FooterCard = (prop) => {
  const { text, button, textColor, icon1, icon2, icon3 } = prop;
  return (
    <div>
      <Card className="border-0">
        <Card.Body>
          <Card.Title
            className="fs-4 text-light fw-bold mt-3"
            style={{ width: "90%" }}
          >
            {text.title}
          </Card.Title>
          <Card.Text
            className="text-light fw-semibold my-3"
            style={{ width: "90%" }}
          >
            {text.desc}
          </Card.Text>
          <div className="row d-flex ">
            <div className="col-md-3 col-sm-5 p-4">
              <div className="ps text-center fs-2 py-2 text-light rounded ">{icon1}</div>
              <p className="fw-semibold pt-3 " style={{ color: textColor,fontSize:'0.97rem' }}>
                {text.smallText1}
              </p>
            </div>
            <div className="col-md-3 col-sm-5 p-4">
              <div className="ps text-center fs-2 py-2 text-light  rounded ">
                {icon2} 
              </div>
              <p className=" fw-semibold pt-3" style={{ color: textColor ,fontSize:'0.97rem'}}>
                {text.smallText2}
              </p>
            </div>

            <div className="col-md-3 col-sm-5 p-4">
              <div className="ps text-center fs-2 py-2 text-light  rounded ">
                {icon3} 
              </div>
              <p
                className="fw-semibold pt-3 text-center"
                style={{ color: textColor,fontSize:'0.97rem' }}
              >
                {text.smallText3}
              </p>
            </div>
          </div>

          <div className="mb-3">{button}</div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FooterCard;

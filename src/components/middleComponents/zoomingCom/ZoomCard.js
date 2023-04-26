import React from "react";
import "./ZoomCard.css";
import { Image } from "react-bootstrap";
const ZoomCard = (props) => {
  const { prop } = props;

  return (
    <div className="defalut ">
      <div className="Display">
        <h1 className="text-center text-primary" style={{ fontSize: "3.5rem" }}>
          <Image src={prop.logo} height='60px' className="image"/>
        </h1>
        <p className="Heading text-center pt-0 fw-bold  px-4">{prop.heading}</p>
      </div>
      <p id="HideText" className="text-center pt-2">{prop.text}</p>
    </div>
  );
};

export default ZoomCard;

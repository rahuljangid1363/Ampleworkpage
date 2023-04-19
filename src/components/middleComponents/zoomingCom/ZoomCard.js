import React from "react";
import "./ZoomCard.css";
const ZoomCard = (props) => {
  const { prop } = props;

  return (
    <div className="defalut">
      <h1 className="text-center text-primary" style={{ fontSize: "3.5rem" }}>
        {prop.logo}
      </h1>
      <p className="text-center fw-semibold px-4" style={{fontSize:'1.05rem'}}>{prop.heading}</p>
      <p className="text-center">{prop.text}</p>
    </div>
  );
};

export default ZoomCard;

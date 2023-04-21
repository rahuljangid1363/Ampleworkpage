import React from "react";
import {
  FaApple,
  FaAmazon,
  FaAmazonPay,
  FaCanadianMapleLeaf,
  FaAppStoreIos,
  FaChrome,
} from "react-icons/fa";

import {
  FooterCard,
  FooterLink,
  FooterLogos,
  InquireNow,
} from "./footerComponents";

const Footer = () => {
  return (
    <>
      <div
        className="bgs container-fluid"
        style={{ backgroundColor: " rgb(21, 16, 59)" }}
      >
        <div className="container pt-5">
          <div className="row " style={{ border: "2px solid blue" }}>
            <div className="blueCard col-lg-6">
              <FooterCard
                text={{
                  title: "Do you want to hire resources for your project?",
                  desc: "We have web and app development team to serve modern tech-savy client by building on the chanllenges on their be spoken requirment.",
                  smallText1: "Part Time",
                  smallText2: "Full-Time",
                  smallText3: "Hourly",
                }}
                button={<InquireNow variant={"outline-light"} />}
                textColor={"white"}
                icon1={FaApple()}
                icon2={FaAmazon()}
                icon3={FaAmazonPay()}
              />
            </div>
            <div className="blackCard col-lg-6 ">
              <FooterCard
                text={{
                  title: "Are you startup and want to go live asap?",
                  desc: "We have been working with startups since our inception and help them scale as they grow. Our experience can help you refine your business ideas and get into the market asap.",
                  smallText1: "Accessibility",
                  smallText2: "Adaptability",
                  smallText3: "Scalability",
                }}
                button={<InquireNow variant={"outline-warning"} />}
                textColor={" rgb(255, 149, 2)"}
                icon1={FaCanadianMapleLeaf()}
                icon2={FaAppStoreIos()}
                icon3={FaChrome()}
              />
            </div>
          </div>

          {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

          <FooterLogos />
        </div>
      </div>

      <FooterLink />
    </>
  );
};

export default Footer;

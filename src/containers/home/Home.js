import React from "react";
import {  NavbarComp } from "../../components";
// import HomeNavAndWelcome from "./homeNavAndWelcome/HomeNavAndWelcome";


const Home = (props) => {
  const { bgImage } = props
  return (<>
    {/* <NavbarAndWelcomePage bgImage={bgImage} /> */}

    {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  HOME PAGE  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
    {/* <HomeNavAndWelcome /> */}
    <div className="container-fluid bg-secondary">
      {/* <NavbarComp /> */}
      <h1>Home</h1>
      {/* <ApplicationService /> */}
      {/* <WelcomeHome /> */}
    </div>
  </>
  );
};

export default Home;

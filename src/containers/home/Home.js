import React from "react";
import { ApplicationService, NavbarComp, WelcomeHome } from "../../components";


const Home = () => {
  return (
    <div className="container-fluid bg-warning">
      <NavbarComp/>
      <h1>Home</h1>
      <ApplicationService/>
      <WelcomeHome/>
    </div>
  );
};

export default Home;

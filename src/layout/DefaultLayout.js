import React from "react";
  
import { Footer, NavbarComp } from "../components";
import AppContent from "../appContent/AppContent";
const DefaultLayout = () => {
  return (
    <div style={{ letterSpacing: '0.02rem' }}>
      <NavbarComp />
      <AppContent/>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

import React from "react";
import {
  ApplicationService,
  AreYouSearching,
  BusinessOperations,
  DigitalizeYourProduct,
  DiversLevels,
  ExperienceUnparalleled,
  FascinatingBenefits,
  Footer,
  FrequentlyQuestion,
  FullStackDeveloperBanner,
  YourDedicatedSupporter,
  InquireAndOwnerCard,
  LetsGetYourApp,
  NavbarAndWelcomePage,
  PortfolioBanner,
  TargetActivities,
  TrustedSkilledDevelopers,
  TypesOfAppMaintain,
  WeProudlyShowcase,
  ZoomingComponent,
} from "../components";
import defaultLayountBg from '../assets/defaultLayout.jpg'
import "../components/navbar/welcomeHome/WelcomeHome.css";
const DefaultLayout = () => {
  return (
    <div style={{letterSpacing:'0.02rem'}}>
      <NavbarAndWelcomePage bgImage={defaultLayountBg} />
      <YourDedicatedSupporter />
      <ExperienceUnparalleled />
      <ZoomingComponent />  
      <ApplicationService />
      <TargetActivities/>
      <TypesOfAppMaintain/>
      <LetsGetYourApp/>
      <FascinatingBenefits/>
      <DiversLevels/>
      <BusinessOperations/>
      <AreYouSearching/>
      <FrequentlyQuestion/>
      <FullStackDeveloperBanner/>
      <TrustedSkilledDevelopers/>
      <WeProudlyShowcase/>
      <PortfolioBanner/>
      <DigitalizeYourProduct/>
      <InquireAndOwnerCard/>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

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
  HexagonShape,
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
import "../components/navbar/welcomeHome/WelcomeHome.css";
const DefaultLayout = () => {
  return (
    <div>
      <NavbarAndWelcomePage />
      <HexagonShape />
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
      {/* <Footer /> */}
    </div>
  );
};

export default DefaultLayout;

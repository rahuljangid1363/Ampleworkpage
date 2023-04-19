import { Blog, CaseStudies, ContactUs, Home, InquireNow, OurCulture, WhatWeDo, WhoWeAre, WorkWithUs } from "../containers";


const AllRoutes = [
  { path: "/home", name: "Home", element: <Home/>},
  { path: "/who-we-are", name: "WhoWeAre", element: <WhoWeAre/>},
  { path: "/what-we-do", name: "WhatWeDo", element: <WhatWeDo/>},
  { path: "/our-culture", name: "OurCulture", element: <OurCulture/>},
  { path: "/work-with-us", name: "WorkWithUs", element: <WorkWithUs/>},
  { path: "/case-studies", name: "CaseStudies", element: <CaseStudies/>},
  { path: "/blog", name: "Blog", element: <Blog/>},
  { path: "/contact-us", name: "ContactUs", element: <ContactUs/>},
  { path: "/inquire-now", name: "InquireNow", element: <InquireNow/>},
  

];
export default AllRoutes;
import { Blog, CaseStudies, ContactUs, Home, InquireNow, OurCulture, WhatWeDo, WhoWeAre, WorkWithUs } from "../containers";

import whoWe from '../assets/whoWeAre.jpg'
import whatWe from '../assets/whatWeDo.jpg'
import ourCultur from '../assets/ourCulture.jpg'
import workWith from '../assets/workWithUs.jpg'
import caseStudy from '../assets/caseStudies.jpg'
import blog from '../assets/blog.png'
import contactUs from '../assets/contactUs.jpg'
import home from '../assets/home.png'
console.log(whoWe);
const AllRoutes = [
  { path: "/home", name: "Home", element: <Home bgImage={home} /> },
  { path: "/who-we-are", name: "WhoWeAre", element: <WhoWeAre bgImage={whoWe} /> },
  { path: "/what-we-do", name: "WhatWeDo", element: <WhatWeDo bgImage={whatWe} /> },
  { path: "/our-culture", name: "OurCulture", element: <OurCulture bgImage={ourCultur} /> },
  { path: "/work-with-us", name: "WorkWithUs", element: <WorkWithUs bgImage={workWith} /> },
  { path: "/case-studies", name: "CaseStudies", element: <CaseStudies bgImage={caseStudy} /> },
  { path: "/blog", name: "Blog", element: <Blog bgImage={blog} /> },
  { path: "/contact-us", name: "ContactUs", element: <ContactUs bgImage={contactUs} /> },
  { path: "/inquire-now", name: "InquireNow", element: <InquireNow bgImage={whoWe} /> },


];
export default AllRoutes;
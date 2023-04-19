// import React from "react";
// import ZoomCard from "./ZoomCard";

// const ZoomingComponent = () => {
//   return (
//     <div className="container-fluid">
//       <div className="container">
//         <div className="row">
//           <div className="col-6">
//             <div className="row">
//               <div className="col-6 shadow">
//                 <ZoomCard />
//               </div>
//               <div className="col-6 shadow">
//                 <ZoomCard />
//               </div>
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="row">
//               <div className="col-6 shadow">
//                 <ZoomCard />
//               </div>
//               <div className="col-6 shadow">
//                 <ZoomCard />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-6">
//             <div className="row">
//               <div className="col-6 shadow">
//                 <ZoomCard />
//               </div>
//               <div className="col-6 shadow">
//                 <ZoomCard />
//               </div>
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="row">
//               <div className="col-6 shadow">
//                 <ZoomCard />
//               </div>
//               <div className="col-6 shadow">
//                 <ZoomCard />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ZoomingComponent;

import Card from "react-bootstrap/Card";
import "./ZoomCard.css";
import ZoomCard from "./ZoomCard";
import {
  MdDisplaySettings,
  MdFilterVintage,
  MdMapsHomeWork,
  MdOutlineKeyboardHide,
  MdOutlineFireTruck,
  MdOutlineBrightness7,
  MdOutlineCamera,
  MdOutlineMoveDown,
} from "react-icons/md";
const Obj = [
  {
    logo: MdDisplaySettings(),
    heading: "Practive Monitoring & Maintenance",
    text: "text1",
  },
  {
    logo: MdFilterVintage(),
    heading: "Web App Maintenance",
    text: "text2",
  },
  {
    logo: MdMapsHomeWork(),
    heading: "Incident Management and Resolution",
    text: "text3",
  },
  {
    logo: MdOutlineKeyboardHide(),
    heading: "Performance Optmization",
    text: "text4",
  },
  {
    logo: MdOutlineFireTruck(),
    heading: "Application Security and Compliance",
    text: "text5",
  },
  {
    logo: MdOutlineBrightness7(),
    heading: "Regular Updates & Upgrades",
    text: "text6",
  },
  {
    logo: MdOutlineCamera(),
    heading: "Application Integration",
    text: "text7",
  },
  {
    logo: MdOutlineMoveDown(),
    heading: "Customized Support Plans",
    text: "text8",
  },
];
function ZoomingComponent() {
  return (
    <>
      <div className="container-fluid" style={{backgroundColor:'rgb(245,245,245)'}}>
        <div className="container">
          <div className="Position row justify-content-center">
            {Obj.map((variant, key) => (
              <Card
                key={key}
                style={{ width: "14rem",backgroundColor:'rgb(255,255,255)' }}
                className="Po m-2 p-0"
              >
                <Card.Body className="p-0">
                  <ZoomCard prop={variant} />
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ZoomingComponent;

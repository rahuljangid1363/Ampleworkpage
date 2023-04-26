
import Card from "react-bootstrap/Card";
import "./ZoomCard.css";
import ZoomCard from "./ZoomCard";
import one from './assets/one.png'
import two from './assets/two.png'
import three from './assets/three.png'
import four from './assets/four.png'
import five from './assets/five.png'
import six from './assets/six.png'
import seven from './assets/seven.png'
import eight from './assets/eight.png'

const Obj = [
  {
    id: 1,
    logo: one,
    heading: "Practive Monitoring & Maintenance",
    text: "We use advanced monitoring tools and technologies to proactively identify potential issues before they become critical. This ensures the smooth functioning of your applications, reducing downtime and improving user experience.",
  },
  {
    id: 2,
    logo:two,
    heading: "Web App Maintenance",
    text: "We use advanced monitoring tools and technologies to proactively identify potential issues before they become critical. This ensures the smooth functioning of your applications, reducing downtime and improving user experience.",
  },
  {
    id: 3,
    logo: three,
    heading: "Incident Management and Resolution",
    text: "We use advanced monitoring tools and technologies to proactively identify potential issues before they become critical. This ensures the smooth functioning of your applications, reducing downtime and improving user experience.",
  },
  {
    id: 4,
    logo: four,
    heading: "Performance Optmization",
    text: "We use advanced monitoring tools and technologies to proactively identify potential issues before they become critical. This ensures the smooth functioning of your applications, reducing downtime and improving user experience.",
  },
  {
    id: 5,
    logo: five,
    heading: "Application Security and Compliance",
    text: "We use advanced monitoring tools and technologies to proactively identify potential issues before they become critical. This ensures the smooth functioning of your applications, reducing downtime and improving user experience.",
  },
  {
    id: 6,
    logo: six,
    heading: "Regular Updates & Upgrades",
    text: "We use advanced monitoring tools and technologies to proactively identify potential issues before they become critical. This ensures the smooth functioning of your applications, reducing downtime and improving user experience.",
  },
  {
    id: 7,
    logo: seven,
    heading: "Application Integration",
    text: "We use advanced monitoring tools and technologies to proactively identify potential issues before they become critical. This ensures the smooth functioning of your applications, reducing downtime and improving user experience.",
  },
  {
    id: 8,
    logo: eight,
    heading: "Customized Support Plans",
    text: "We use advanced monitoring tools and technologies to proactively identify potential issues before they become critical. This ensures the smooth functioning of your applications, reducing downtime and improving user experience.",
  },
];
function ZoomingComponent() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: 'rgb(245,245,245)' }}>
        <div className="container">
          <div className="Position row justify-content-center ">
            {Obj.map((variant, key) => (
              <Card
                key={key}
                style={{ width: "15rem", backgroundColor: 'rgb(255,255,255)' }}
                className="Po m-3 border-0 shadow-sm px-0"
              >
                <Card.Body className="hd" id="hd">
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

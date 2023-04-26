import React from "react";
import ActivityCard from "./ActivityCard";
import { BiAddToQueue, BiAtom, BiBeer, BiCategoryAlt, BiCodeBlock, BiCommand, BiFilm, BiQrScan } from "react-icons/bi";
import img1 from './asset/1.png'
import img2 from './asset/two.png'
import img3 from './asset/three.png'
import img4 from './asset/four.png'
import img5 from './asset/five.png'
import img6 from './asset/six.png'
import img7 from './asset/seven.png'
import img8 from './asset/eight.png'
import './TargetActivities.css'
const ActivityCardData = [
    {
        icon: img1,
        text: 'Bug Busting & Debugging'
    },
    {
        icon: img2,
        text: 'Quality Checks'
    },
    {
        icon: img3,
        text: 'Remote Product Maintenance'
    },
    {
        icon: img4,
        text: 'Version Enhancements'
    },
    {
        icon: img5,
        text: 'Load Testing'
    },
    {
        icon: img6,
        text: 'Tech Troubleshooting'
    },
    {
        icon: img7,
        text: 'Performance Oversight'
    },
    {
        icon: img8,
        text: 'User-Focused Support'
    },
]

const TargetActivities = () => {
    return (<>
        <div className="container-fluid py-4" style={{backgroundColor:'rgb(250,250,250)',fontFamily:'Poppins'}}>
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-6 pt-4">
                        <h3>
                            Amplework’s Targeted Activities For Application Maintenance Support Services
                        </h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>

                        <ul className="ulList">
                            <li>
                                Amplework offers hire.
                            </li>
                            <li>
                                dedicated Full Stack.
                            </li>
                            <li>
                                developers who possess.
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            {
                                ActivityCardData.map((data,key) => {
                                    return (<>
                                        <div className="col d-flex mb-4" key={key} >
                                            <ActivityCard prop={data} />
                                        </div>
                                    </>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default TargetActivities
import React from "react";
import ActivityCard from "./ActivityCard";
import { BiAddToQueue, BiAtom, BiBeer, BiCategoryAlt, BiCodeBlock, BiCommand, BiFilm, BiQrScan } from "react-icons/bi";
import './TargetActivities.css'
const ActivityCardData = [
    {
        icon: BiAddToQueue(),
        bgColor: 'rgb(240,100,102)',
        borderColor: ' 5px -3px 1px 2px  rgb(255,235,235)',
        text: 'Bug Busting & Debugging'
    },
    {
        icon: BiAtom(),
        bgColor: 'rgb(244,131,98)',
        borderColor: ' 5px -3px 1px 2px  rgb(255, 231 ,225)',
        text: 'Quality Checks'
    },
    {
        icon: BiBeer(),
        bgColor: 'rgb(158,109,175)',
        borderColor: ' 5px -3px 1px 2px  rgb(238,208,248)',
        text: 'Remote Product Maintenance'
    },
    {
        icon: BiCategoryAlt(),
        bgColor: 'rgb(78,189,142)',
        borderColor: ' 5px -3px 1px 2px  rgb(210,246,231)',
        text: 'Version Enhancements'
    },
    {
        icon: BiCodeBlock(),
        bgColor: 'rgb(247,164,87)',
        borderColor: ' 5px -3px 1px 2px  rgb(255,229,204)',
        text: 'Load Testing'
    },
    {
        icon: BiCommand(),
        bgColor: 'rgb(89,148,245)',
        borderColor: ' 5px -3px 1px 2px  rgb(180,208,255)',
        text: 'Tech Troubleshooting'
    },
    {
        icon: BiFilm(),
        bgColor: 'rgb(55,189,234)',
        borderColor: ' 5px -3px 1px 2px  rgb(201,242,255)',
        text: 'Performance Oversight'
    },
    {
        icon: BiQrScan(),
        bgColor: 'rgb(89,119 ,204)',
        borderColor: ' 5px -3px 1px 2px  rgb(152 ,178 ,245)',
        text: 'User-Focused Support'
    },
]

const TargetActivities = () => {
    return (<>
        <div className="container-fluid py-4" style={{backgroundColor:'rgb(250,250,250)'}}>
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-6 pt-4">
                        <h3>
                            Amplework’s Targeted Activities For Application Maintenance Support Services
                        </h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>

                        <ul className="ulList fw-semibold">
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
import React from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import oac from "../../assets/images/oac.png";
import outlook from "../../assets/images/outlook.png";
import canvas from "../../assets/images/icon-16.png";
import pcs from "../../assets/images/pcschool.png";
import edupage from "../../assets/images/edupage.png";
import gcal from "../../assets/images/calendar.png";
import PAT from "../../assets/images/PAT.png";
import classwize from "../../assets/images/classwize.png";
import naplan from "../../assets/images/naplan.png";
import daybook from "../../assets/images/googledocs.png";

const PLinks = (props) => {
  return (
        <div className="col-6 pl-0">
            <Tabs defaultActiveKey={props.option} id="uncontrolled-tab-example">
                <Tab eventKey="Students" title="Students">
                    <Student />
                </Tab>
                <Tab eventKey="Teachers" title="Teachers">
                    <Teacher />       
                </Tab>
                <Tab eventKey="wifi" title="Wi-Fi Help">
                    <Wifi />
                </Tab>
            </Tabs>
        </div>
  );
}

const Student = () => {
    return (
        <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex align-items-center">
                <img className="mr-2" src={canvas} alt="HCS" /><a href="https://canvas.horizon.sa.edu.au" rel="noreferrer" target="_blank">Canvas</a>
            </li>

            <li className="list-group-item d-flex align-items-center">
            <img className="mr-2" src={outlook} alt="HCS" height="16px" width="16px" /><a href="https://outlook.office365.com" rel="noreferrer" target="_blank">Outlook</a>
            </li>
            
            <li className="list-group-item d-flex align-items-center">
            <img className="mr-2" src={oac} alt="HCS" height="16px" width="16px" /><a href="https://www.openaccess.edu.au/students/student-links" rel="noreferrer" target="_blank">Open Access Student Links</a>
            </li>

            <li className="list-group-item d-flex align-items-center">
            <img className="mr-2" src={PAT} alt="HCS" height="16px" width="16px" /><a href="https://oars.acer.edu.au/8496" rel="noreferrer" target="_blank">PAT Testing</a>
            </li>
            
        </ul>
    );
}


const Teacher = () => {
    return (
        <div className='d-flex justify-content-center'>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center">
                    <img className="mr-2" src={canvas} alt="HCS" /><a href="https://canvas.horizon.sa.edu.au" rel="noreferrer" target="_blank">Canvas</a>
                </li>    
                <li className="list-group-item d-flex align-items-center">
                    <img className="mr-2" src={edupage} alt="HCS" height="16px" width="16px" /><a href="https://horizoncs.edupage.org/" rel="noreferrer" target="_blank">Edupage</a>
                </li>

                <li className="list-group-item d-flex align-items-center">
                    <img className="mr-2" src={pcs} alt="HCS" height="16px" width="16px" /><a href="https://spider.horizon.sa.edu.au/" rel="noreferrer" target="_blank">PCSchools</a>
                </li>

                <li className="list-group-item d-flex align-items-center">
                    <img className="mr-2" src={outlook} alt="HCS" height="16px" width="16px" /><a href="https://outlook.office365.com" rel="noreferrer" target="_blank">Outlook</a>
                </li>
            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center">
                    <img className="mr-2" src={gcal} alt="HCS" height="16px" width="16px" /><a href="https://calendar.google.com/" rel="noreferrer" target="_blank">Google Calendar</a>
                </li>
                <li className="list-group-item d-flex align-items-center">
                    <img className="mr-2" src={daybook} alt="HCS" height="16px" width="16px" /><a href="https://docs.google.com/document/d/1Sgu-3RMNhVYSMuxpoOIR6PlLJXGbs1gcAgxFSVVkgh8/edit" rel="noreferrer" target="_blank">Daybook</a>
                </li>
                <li className="list-group-item d-flex align-items-center">
                    <img className="mr-2" src={classwize} alt="HCS" height="16px" width="16px" /><a href="https://classroom.au-1.familyzone.io/login" rel="noreferrer" target="_blank">Classwize Login</a>
                </li>
                <li className="list-group-item d-flex align-items-center">
                    <img className="mr-2" src={naplan} alt="HCS" height="16px" width="16px" /><a href="https://administration.assessform.edu.au/auth/login" rel="noreferrer" target="_blank">Naplan Login</a>
                </li>
            </ul>
        </div>
    );
}

const Wifi = () => {
    return (
        <div className='details pt-3'>
            <ul>
                <li>Connect to Wi-Fi
                    <ul className='pt-3'>
                        <li className='mb-1'>Wi-Fi:    <span>HCS-Connect</span></li>
                        <li className='mb-1'>Password: <span>Horizon2023!</span></li>
                    </ul>
                </li>
                <li>Visit <a href="https://login.syd-1.linewize.net/">Linewize Login</a> to sign into network</li>                
            </ul>
            <p>If you still experience problems, please visit IT Office for help.</p>
        </div>
    );
}

export default PLinks;
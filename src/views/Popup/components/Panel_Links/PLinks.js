import React from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import oac from "../../assets/images/oac.png";
import outlook from "../../assets/images/outlook.png";
import canvas from "../../assets/images/icon-16.png";
import pcs from "../../assets/images/pcschool.png";
import edupage from "../../assets/images/edupage.png";
import gcal from "../../assets/images/calendar.png";
import csinschool from "../../assets/images/csinschool.png";

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
                {/* <Tab eventKey="security" title="Security">
                    <Security />
                </Tab> */}
            </Tabs>
        </div>
  );
}
// const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numbers = "0123456789";
// const symbols = "!@#$%^&*_-+=";
// export class Security extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             strength: 'strong',
//             value: ''
//         }
//     }
//     generate = () => {
//         var characters = alpha
//         switch (this.state.strength) {

//             case 'strong':
//                 characters += numbers;
//                 characters += symbols;
//                 break;
//             case 'medium':
//                 characters += numbers;                
//                 break;
//             default:
//                 break;
//         }
//         this.setState({value: this.generatePassword(8, characters)})
//     }
//     generatePassword = (length, characters) => {
//         let password = "";
//         for (let i = 0; i < length; i++) {
//           password += characters.charAt(
//             Math.floor(Math.random() * characters.length)
//           );
//         }
//         return password;
//     };
//     render() {
//         // console.log(this.state.strength)
//         return (
//             <div className="position-relative p-2">
//                 <div className="form-group">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input type="text" className="form-control text-center" name="password" value={this.state.value} />
//                 </div>
//                 <div className="form-group d-flex justify-content-between w-100">
//                     <div class="form-check form-check-inline">
//                         <input name="group1" type="radio" id="inline-radio-1" defaultChecked={true} className="form-check-input" onChange={(e) => e.currentTarget.checked?this.setState({strength: 'strong'}):null}/>
//                         <label title="" for="inline-radio-1" class="form-check-label">Strong</label>
//                     </div>
//                     <div class="form-check form-check-inline">
//                         <input name="group1" type="radio" id="inline-radio-1" className="form-check-input" onChange={(e) => e.currentTarget.checked?this.setState({strength: 'medium'}):null}/>
//                         <label title="" for="inline-radio-1" class="form-check-label">Medium</label>
//                     </div>
//                     <div class="form-check form-check-inline">
//                         <input name="group1" type="radio" id="inline-radio-1" className="form-check-input" onChange={(e) => e.currentTarget.checked?this.setState({strength: 'weak'}):null}/>
//                         <label title="" for="inline-radio-1" class="form-check-label">Weak</label>
//                     </div>
//                 </div>
//                 <div className="form-group text-center">
//                     <button className="btn btn-info" onClick={this.generate}>Generate Password</button>
//                 </div>
//             </div>
//         );
//     }
// }

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
            <img className="mr-2" src={csinschool} alt="HCS" height="16px" width="16px" /><a href="https://www.coolmathgames.com/" rel="noreferrer" target="_blank">Cool Maths Games</a>
            </li>
            
        </ul>
    );
}


const Teacher = () => {
    return (
        <ul className="list-group list-group-flush" >
            <li className="list-group-item d-flex align-items-center">
                <img className="mr-2" src={canvas} alt="HCS" /><a href="https://canvas.horizon.sa.edu.au" rel="noreferrer" target="_blank">Canvas</a>
            </li>
    
            <li className="list-group-item d-flex align-items-center">
            <img className="mr-2" src={edupage} alt="HCS" height="16px" width="16px" /><a href="https://horizoncs.edupage.org/" rel="noreferrer" target="_blank">Edupage</a>
            </li>

            <li className="list-group-item d-flex align-items-center">
            <img className="mr-2" src={pcs} alt="HCS" height="16px" width="16px" /><a href="https://spider.horizon.sa.edu.au/" rel="noreferrer" target="_blank">Spider</a>
            </li>

            <li className="list-group-item d-flex align-items-center">
            <img className="mr-2" src={outlook} alt="HCS" height="16px" width="16px" /><a href="https://outlook.office365.com" rel="noreferrer" target="_blank">Outlook</a>
            </li>
            <li className="list-group-item d-flex align-items-center">
            <img className="mr-2" src={gcal} alt="HCS" height="16px" width="16px" /><a href="https://calendar.google.com/" rel="noreferrer" target="_blank">Google Calendar</a>
            </li>
        </ul>
    );
}

export default PLinks;
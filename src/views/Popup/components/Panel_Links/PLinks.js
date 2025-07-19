import { Tab, Tabs } from "react-bootstrap";
import gcal from "../../assets/images/calendar.png";
import classwize from "../../assets/images/classwize.png";
import edupage from "../../assets/images/edupage.png";
import daybook from "../../assets/images/googledocs.png";
import canvas from "../../assets/images/icon-16.png";
import naplan from "../../assets/images/naplan.png";
import oac from "../../assets/images/oac.png";
import outlook from "../../assets/images/outlook.png";
import PAT from "../../assets/images/PAT.png";
import pcs from "../../assets/images/pcschool.png";

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
};

const Student = () => {
	return (
		<ul className="list-group list-group-flush">
			<li className="list-group-item d-flex align-items-center">
				<img className="mr-2" src={canvas} alt="HCS" />
				<a
					href="https://canvas.horizon.sa.edu.au"
					rel="noreferrer"
					target="_blank"
				>
					Canvas
				</a>
			</li>

			<li className="list-group-item d-flex align-items-center">
				<img
					className="mr-2"
					src={outlook}
					alt="HCS"
					height="16px"
					width="16px"
				/>
				<a
					href="https://outlook.office365.com"
					rel="noreferrer"
					target="_blank"
				>
					Outlook
				</a>
			</li>

			<li className="list-group-item d-flex align-items-center">
				<img
					className="mr-2"
					src={oac}
					alt="HCS"
					height="16px"
					width="16px"
				/>
				<a
					href="https://www.openaccess.edu.au/students/student-links"
					rel="noreferrer"
					target="_blank"
				>
					Open Access Student Links
				</a>
			</li>

			<li className="list-group-item d-flex align-items-center">
				<img
					className="mr-2"
					src={PAT}
					alt="HCS"
					height="16px"
					width="16px"
				/>
				<a
					href="https://oars.acer.edu.au/8496"
					rel="noreferrer"
					target="_blank"
				>
					PAT Testing
				</a>
			</li>
		</ul>
	);
};

const Teacher = () => {
	return (
		<div
			className="d-flex justify-content-center"
			style={{ whiteSpace: "nowrap" }}
		>
			<ul className="list-group list-group-flush">
				<li className="list-group-item d-flex align-items-center">
					<img className="mr-2" src={canvas} alt="HCS" />
					<a
						href="https://canvas.horizon.sa.edu.au"
						rel="noreferrer"
						target="_blank"
					>
						Canvas
					</a>
				</li>
				<li className="list-group-item d-flex align-items-center">
					<img
						className="mr-2"
						src={edupage}
						alt="HCS"
						height="16px"
						width="16px"
					/>
					<a
						href="https://horizoncs.edupage.org/"
						rel="noreferrer"
						target="_blank"
					>
						Edupage
					</a>
				</li>

				<li className="list-group-item d-flex align-items-center">
					<img
						className="mr-2"
						src={pcs}
						alt="HCS"
						height="16px"
						width="16px"
					/>
					<a
						href="https://horizon.sa.tass.cloud/tassweb/index.cfm"
						rel="noreferrer"
						target="_blank"
					>
						TASS Admin
					</a>
				</li>

				<li className="list-group-item d-flex align-items-center">
					<img
						className="mr-2"
						src={pcs}
						alt="HCS"
						height="16px"
						width="16px"
					/>
					<a
						href="https://horizon.sa.tass.cloud/kiosk"
						rel="noreferrer"
						target="_blank"
					>
						TASS Kiosk
					</a>
				</li>

				<li className="list-group-item d-flex align-items-center">
					<img
						className="mr-2"
						src={outlook}
						alt="HCS"
						height="16px"
						width="16px"
					/>
					<a
						href="https://outlook.office365.com"
						rel="noreferrer"
						target="_blank"
					>
						Outlook
					</a>
				</li>
				<li className="list-group-item d-flex align-items-center">
					<img
						className="mr-2"
						src={naplan}
						alt="HCS"
						height="16px"
						width="16px"
					/>
					<a
						href="https://administration.assessform.edu.au/auth/login"
						rel="noreferrer"
						target="_blank"
					>
						Naplan Login
					</a>
				</li>
			</ul>
			<ul className="list-group list-group-flush">
				<li className="list-group-item d-flex align-items-center">
					<img
						className="mr-2"
						src={gcal}
						alt="HCS"
						height="16px"
						width="16px"
					/>
					<a
						href="https://calendar.google.com/"
						rel="noreferrer"
						target="_blank"
					>
						Google Calendar
					</a>
				</li>
				<li className="list-group-item d-flex align-items-center">
					<img
						className="mr-2"
						src={daybook}
						alt="HCS"
						height="16px"
						width="16px"
					/>
					<a
						href="https://docs.google.com/document/d/1Sgu-3RMNhVYSMuxpoOIR6PlLJXGbs1gcAgxFSVVkgh8/edit"
						rel="noreferrer"
						target="_blank"
					>
						Daybook
					</a>
				</li>
				<li className="list-group-item d-flex align-items-center">
					<img
						className="mr-2"
						src={classwize}
						alt="HCS"
						height="16px"
						width="16px"
					/>
					<a
						href="https://classroom.au-1.familyzone.io/login"
						rel="noreferrer"
						target="_blank"
					>
						Classwize Login
					</a>
				</li>
			</ul>
		</div>
	);
};

const Wifi = () => {
	return (
		<div
			className="details pt-3"
			style={{ fontWeight: 300, fontSize: "12px" }}
		>
			<ul>
				<li style={{ marginBottom: "8px" }}>
					Connect to Wi-Fi
					<ul className="pt-2">
						<li style={{ marginBottom: "8px" }} className="mb-1">
							Wi-Fi: <span>HCS-Connect</span>
						</li>
						<li className="mb-1">
							Password: <span>Horizon2023!</span>
						</li>
					</ul>
				</li>
				<li style={{ marginBottom: "8px" }}>
					Visit{" "}
					<a
						href="https://login.syd-1.linewize.net/"
						rel="noreferrer"
						target="_blank"
					>
						Linewize Login
					</a>{" "}
					to sign into network
				</li>
				<p
					className="m-0"
					style={{ fontWeight: 300, fontSize: "12px" }}
				>
					If you are on a new device (not managed by the school)
					please follow the link below to download and install the
					certificate and App
				</p>
				<li style={{ marginTop: "8px" }}>
					Visit Horizon Certificate Portal to{" "}
					<a
						href="https://certs.horizon.sa.edu.au"
						rel="noreferrer"
						target="_blank"
					>
						Download
					</a>{" "}
					the Cert and App
				</li>
			</ul>
			<p>
				If you still experience problems, please visit IT Office for
				help.
			</p>
		</div>
	);
};

export default PLinks;

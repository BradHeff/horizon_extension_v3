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
	const customLinks = JSON.parse(
		localStorage.getItem("customLinks_Students") || "[]"
	);

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

			{customLinks.length > 0 && (
				<>
					<li
						className="list-group-item"
						style={{
							backgroundColor: "#f8f9fa",
							fontWeight: "bold",
							fontSize: "12px",
							color: "#666",
						}}
					>
						CUSTOM LINKS
					</li>
					{customLinks.map((link) => (
						<li
							key={link.id}
							className="list-group-item d-flex align-items-center"
						>
							<div
								className="mr-2"
								style={{
									width: "16px",
									height: "16px",
									backgroundColor: "#667eea",
									borderRadius: "3px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<span
									style={{
										color: "white",
										fontSize: "10px",
										fontWeight: "bold",
									}}
								>
									🔗
								</span>
							</div>
							<a href={link.url} rel="noreferrer" target="_blank">
								{link.name}
							</a>
						</li>
					))}
				</>
			)}
		</ul>
	);
};

const Teacher = () => {
	const customLinks = JSON.parse(
		localStorage.getItem("customLinks_Teachers") || "[]"
	);

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
						Naplan Admin
					</a>
				</li>

				{customLinks.length > 0 && (
					<>
						<li
							className="list-group-item"
							style={{
								backgroundColor: "#f8f9fa",
								fontWeight: "bold",
								fontSize: "12px",
								color: "#666",
							}}
						>
							CUSTOM LINKS
						</li>
						{customLinks
							.slice(0, Math.ceil(customLinks.length / 2))
							.map((link) => (
								<li
									key={link.id}
									className="list-group-item d-flex align-items-center"
								>
									<div
										className="mr-2"
										style={{
											width: "16px",
											height: "16px",
											backgroundColor: "#667eea",
											borderRadius: "3px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<span
											style={{
												color: "white",
												fontSize: "10px",
												fontWeight: "bold",
											}}
										>
											🔗
										</span>
									</div>
									<a
										href={link.url}
										rel="noreferrer"
										target="_blank"
									>
										{link.name}
									</a>
								</li>
							))}
					</>
				)}
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

				{customLinks.length > 0 &&
					customLinks.length > Math.ceil(customLinks.length / 2) && (
						<>
							{customLinks
								.slice(Math.ceil(customLinks.length / 2))
								.map((link) => (
									<li
										key={link.id}
										className="list-group-item d-flex align-items-center"
									>
										<div
											className="mr-2"
											style={{
												width: "16px",
												height: "16px",
												backgroundColor: "#667eea",
												borderRadius: "3px",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											<span
												style={{
													color: "white",
													fontSize: "10px",
													fontWeight: "bold",
												}}
											>
												🔗
											</span>
										</div>
										<a
											href={link.url}
											rel="noreferrer"
											target="_blank"
										>
											{link.name}
										</a>
									</li>
								))}
						</>
					)}
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
						<li style={{ marginBottom: "8px" }} className="mb-1">
							Wi-Fi Clare: <span>HCSC-Connect</span>
						</li>
						<li className="mb-1">
							Password:{" "}
							<span>Horizon{new Date().getFullYear()}!</span>
						</li>
					</ul>
				</li>
				<li style={{ marginBottom: "8px" }}>
					Visit{" "}
					<a
						href="https://login.linewize.net/"
						rel="noreferrer"
						target="_blank"
					>
						Linewize Login
					</a>{" "}
					to sign into network
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

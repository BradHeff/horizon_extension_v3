import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { connect } from "react-redux";
import "../Popup/assets/fonts/poppins.css";
import { tabOptions } from "../Reducer/Action";
import "./App.css";
import logo from "./assets/images/logo.png";

const mapStateToProps = (state) => {
	return {
		option: state.OptionSelect.option,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTabOption: (link) => dispatch(tabOptions(link)),
	};
};

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			linkName: "",
			linkUrl: "",
			selectedTab: props.option || "Students",
			customLinks: {
				Students: JSON.parse(
					localStorage.getItem("customLinks_Students") || "[]"
				),
				Teachers: JSON.parse(
					localStorage.getItem("customLinks_Teachers") || "[]"
				),
			},
		};
	}

	handleOptionChange = (e) => {
		const selectedTab = e.target.value;
		this.setState({ selectedTab });
		this.props.onTabOption(selectedTab);
		localStorage.setItem("option", selectedTab);
	};

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleAddLink = (e) => {
		e.preventDefault();
		const { linkName, linkUrl, selectedTab, customLinks } = this.state;

		if (!linkName.trim() || !linkUrl.trim()) {
			alert("Please fill in both name and URL fields");
			return;
		}

		// Add protocol if not present
		let formattedUrl = linkUrl;
		if (!linkUrl.startsWith("http://") && !linkUrl.startsWith("https://")) {
			formattedUrl = "https://" + linkUrl;
		}

		const newLink = {
			id: Date.now(),
			name: linkName.trim(),
			url: formattedUrl,
		};

		const updatedLinks = {
			...customLinks,
			[selectedTab]: [...customLinks[selectedTab], newLink],
		};

		this.setState({
			customLinks: updatedLinks,
			linkName: "",
			linkUrl: "",
		});

		localStorage.setItem(
			`customLinks_${selectedTab}`,
			JSON.stringify(updatedLinks[selectedTab])
		);
	};

	handleDeleteLink = (linkId) => {
		const { selectedTab, customLinks } = this.state;
		const updatedLinks = {
			...customLinks,
			[selectedTab]: customLinks[selectedTab].filter(
				(link) => link.id !== linkId
			),
		};

		this.setState({ customLinks: updatedLinks });
		localStorage.setItem(
			`customLinks_${selectedTab}`,
			JSON.stringify(updatedLinks[selectedTab])
		);
	};

	render() {
		const { linkName, linkUrl, selectedTab, customLinks } = this.state;
		const currentLinks = customLinks[selectedTab] || [];

		return (
			<div className="options-container">
				<div className="image-logo">
					<img src={logo} alt="Horizon Logo" className="img-fluid" />
				</div>

				<h1 className="page-title">Extension Options</h1>
				<p className="page-subtitle">
					Customize your Horizon Extension experience
				</p>

				<div className="radio-group">
					<div className="radio-option">
						<input
							type="radio"
							id="students"
							value="Students"
							name="options"
							checked={selectedTab === "Students"}
							onChange={this.handleOptionChange}
						/>
						<label htmlFor="students" className="radio-label">
							👨‍🎓 Students
						</label>
					</div>
					<div className="radio-option">
						<input
							type="radio"
							id="teachers"
							value="Teachers"
							name="options"
							checked={selectedTab === "Teachers"}
							onChange={this.handleOptionChange}
						/>
						<label htmlFor="teachers" className="radio-label">
							👩‍🏫 Teachers
						</label>
					</div>
				</div>

				<div className="link-management">
					<h2 className="section-title">
						Manage {selectedTab} Links
					</h2>

					<div className="add-link-form">
						<h3
							style={{
								marginTop: 0,
								marginBottom: 20,
								color: "#555",
							}}
						>
							Add Custom Link
						</h3>
						<form onSubmit={this.handleAddLink}>
							<div className="form-row align-items-center">
								<div className="form-group">
									<label
										className="form-label"
										htmlFor="linkName"
									>
										Link Name
									</label>
									<input
										type="text"
										id="linkName"
										name="linkName"
										className="form-input"
										placeholder="e.g., School Portal"
										value={linkName}
										onChange={this.handleInputChange}
									/>
								</div>
								<div className="form-group">
									<label
										className="form-label"
										htmlFor="linkUrl"
									>
										URL
									</label>
									<input
										type="url"
										id="linkUrl"
										name="linkUrl"
										className="form-input"
										placeholder="e.g., https://horizon.sa.edu.au"
										value={linkUrl}
										onChange={this.handleInputChange}
									/>
								</div>
								<button
									type="submit"
									className="btn btn-primary mt-2"
								>
									Add Link
								</button>
							</div>
						</form>
					</div>

					<div className="custom-links">
						<h3 style={{ marginBottom: 20, color: "#555" }}>
							Custom {selectedTab} Links
						</h3>
						{currentLinks.length === 0 ? (
							<div className="empty-state">
								No custom links added yet. Add your first link
								above!
							</div>
						) : (
							currentLinks.map((link) => (
								<div key={link.id} className="link-item">
									<div className="link-info">
										<div className="link-title">
											{link.name}
										</div>
										<div className="link-url">
											{link.url}
										</div>
									</div>
									<button
										className="btn btn-danger"
										onClick={() =>
											this.handleDeleteLink(link.id)
										}
									>
										Delete
									</button>
								</div>
							))
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);

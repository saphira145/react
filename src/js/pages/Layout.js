import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";

export default class Layout extends React.Component {
	constructor() {
		super();
		
	}

	navigate() {
		this.props.history.pushState('null', '/')
	}

	render() {
		return (
			<div>
				{this.props.children}
				<Link to="setting">setting</Link>
				<Link to="contact">contact</Link>
				<button onClick={this.navigate.bind(this)}>Home</button>
			</div>	
		);
	}
}
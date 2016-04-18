import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {title: 'old title'};
	}

	changeTitle(title) {
		this.setState({title});
	}

	render() {

		return (
			<div>
				{this.state.title}
				<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
				<Footer/>
			</div>
		)
	}
}
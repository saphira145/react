import React from "react";

export default class Header extends React.Component {
	constructor() {
		super();
	}

	handleChange(e) {
		this.props.changeTitle(e.target.value);
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<h1>Header </h1>
				<input onChange={this.handleChange.bind(this)} />
			</div>
		)
	}
}
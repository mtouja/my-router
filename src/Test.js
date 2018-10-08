import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			titre: "Bonjour",
			color: "primary"
		}
	}

	porteEnCul() {
		this.setState({
			color: "success"
		});
	}
	
	render() {
			return (
					<div>
							<h1>{this.state.titre}</h1>
							<Button className ={this.state.color} onClick={this.porteEnCul}>va chier</Button>
					</div>
			);
	}
}

export default Test;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header, Image, Input } from 'semantic-ui-react'

import './assets/Login.css';
import Icon from './assets/person.png';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = props;
	}

  render() {
    return (
    	<Grid container columns={4}>
				<Grid.Row column={1}>
					<Grid.Column centered computer={16}>
						<div id="uucss-end">
							<Image src={ Icon } centered className="uucss-icon small"/>
						</div>
						<div id="uucss-start">
							<Header as='h1' block textAlign="center" className="uucss-maroon-header" id="uucss-header-first">
								LOGIN<br />
								UPLB Unified Car Sticker System
							</Header>
						</div>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={1}>
					<Grid.Column centered computer={8} mobile={16}>
						<Input type="text" name="last_name" label='Last Name' className="uucss-input"/>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={1} className="uucss-remove-top">
					<Grid.Column centered computer={8} mobile={16}>
						<Input type="text" name="plate_no" label='Plate No.' className="uucss-input"/>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={2}>
					<Grid.Column centered computer={4} mobile={8}>
						<Button className="uucss-btn"> Login </Button>
					</Grid.Column>
					<Grid.Column centered computer={4} mobile={8}>
						<Link to="/">
							<Button className="uucss-btn"> Back </Button>
						</Link>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
  }
}

export default Login;
import React, { Component } from 'react';
import { Button, Card, Grid, Header, Image, Input, Label } from 'semantic-ui-react'

import './assets/SetApp.css';
import Icon from './assets/person.png';

class SetApp extends Component {
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
								SET APPOINTMENT<br />
								UPLB Unified Car Sticker System
							</Header>
						</div>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={1} className="uucss-deduct-bottom">
					<Grid.Column centered computer={8} mobile={16}>
						<Input label='First Name' className="uucss-input"/>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={1} className="uucss-remove-top uucss-deduct-bottom">
					<Grid.Column centered computer={8} mobile={16}>
						<Input label='Middle Name' className="uucss-input"/>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={1} className="uucss-remove-top">
					<Grid.Column centered computer={8} mobile={16}>
						<Input label='Last Name' className="uucss-input"/>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={1} className="uucss-remove-top">
					<Grid.Column centered computer={8} mobile={16}>
						<Input label='Plate No.' className="uucss-input"/>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={1} className="uucss-remove-top">
					<Grid.Column centered computer={8} mobile={16}>
						<Input label='Date' className="uucss-input"/>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={2}>
					<Grid.Column centered computer={4} mobile={8}>
						<Button className="uucss-btn"> Login </Button>
					</Grid.Column>
					<Grid.Column centered computer={4} mobile={8}>
						<Button className="uucss-btn"> Back </Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
  }
}

export default SetApp;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header, Image, Input } from 'semantic-ui-react'

import './assets/SetApp.css';
import Icon from './assets/person.png';

class SetApp extends Component {
	constructor(props) {
		super(props);
		this.state = props;
		this.onHandleChange = this.onHandleChange.bind(this);
	}

	onHandleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

  render() {
    return (
    	<Grid container columns={4}>
				<Grid.Row column={1}>
					<Grid.Column computer={16}>
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
					<Grid.Column computer={8} mobile={16}>
						<Input type="text" name="first_name" value={this.state.first_name} onChange={this.onHandleChange} label='First Name' className="uucss-input"/>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={1} className="uucss-remove-top uucss-deduct-bottom">
					<Grid.Column computer={8} mobile={16}>
						<Input type="text" name="middle_name" value={this.state.middle_name} onChange={this.onHandleChange} label='Middle Name' className="uucss-input"/>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={1} className="uucss-remove-top">
					<Grid.Column computer={8} mobile={16}>
						<Input type="text" name="last_name" value={this.state.last_name} onChange={this.onHandleChange} label='Last Name' className="uucss-input"/>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={1} className="uucss-remove-top">
					<Grid.Column computer={8} mobile={16}>
						<Input type="text" name="plate_no" value={this.state.plate_no} onChange={this.onHandleChange} label='Plate No.' className="uucss-input"/>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={1} className="uucss-remove-top">
					<Grid.Column computer={8} mobile={16}>
						<Link to="/datepicker">
							<Input label='Date' className="uucss-input"/>
						</Link>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={2}>
					<Grid.Column computer={4} mobile={8}>
						<Link to="">
							<Button className="uucss-btn"> Done </Button>
						</Link>
					</Grid.Column>
					<Grid.Column computer={4} mobile={8}>
						<Link to="/">
							<Button className="uucss-btn"> Back </Button>
						</Link>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
  }
}

export default SetApp;
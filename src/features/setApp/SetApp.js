import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Form, Grid, Header, Icon, Image, Input, Modal, Radio } from 'semantic-ui-react';

import './assets/SetApp.css';

import IconUser from './assets/person.png';
import firebase from '../../firebase';

class SetApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			first_name: this.props.first_name,
			middle_name: this.props.middle_name,
			last_name: this.props.last_name,
			plate_no: this.props.plate_no,
			phone_num: this.props.phone_num,
			queue_num: this.props.queue_num,
			serving_num: this.props.serving_num,
			appointment_dates: 	[
														new Date("October 13, 2014 1:10:00"),
														new Date("February 6, 2016 1:10:00"),
														new Date("March 27, 2017 1:10:00")
													],
			appoint_date: this.props.appoint_date
		}
		
		this.onHandleChange = this.onHandleChange.bind(this);
		this.saveData = this.saveData.bind(this);
		this.onDateChange = this.onDateChange.bind(this);
	}

	onHandleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	saveData = () => {
		const data = {
			first_name: this.state.first_name,
			middle_name: this.state.middle_name,
			last_name: this.state.last_name,
			plate_no: this.state.plate_no,
			appoint_date: this.state.appoint_date,
			phone_num: this.state.phone_num,
			queue_num: 0
		}

		// get date from the input field date
		let dateformat = new Date(data.appoint_date);

		// get reference for the date
		let date = dateformat.getDate() + "" + dateformat.getMonth() + "" + dateformat.getFullYear();
		// console.log("date");
		// console.log(date);

		// get data from firebase
		const queueRef = firebase.database().ref("queueing_sys/queue/"+date+"/");
		const peopleRef = firebase.database().ref("queueing_sys/queue/"+date+"/people");
		let queueList = []

		// push data to database
		queueRef.on('value', (snapshot) => {
		  queueList = snapshot.val();
			console.log("reference in database")
			console.log(snapshot.val())
			console.log(queueList.in_queue)
			data.queue_num = queueList.in_queue + 1
		});

		// update state of app
		delete data.appoint_date;
		queueRef.push(data);
		data["isLoggedIn"] = true;
		this.props.action(data);
		this.props.history.push("/");
	}

	onDateChange = (e, { value }) => {
		this.setState({ value })
		this.state.appoint_date = value;
	}	

  render() {
    return (
    	<Grid container columns={4}>
				<Grid.Row column={1}>
					<Grid.Column computer={16}>
						<div id="uucss-end">
							<Image src={ IconUser } centered className="uucss-icon small"/>
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
						<Input type="text" name="phone_num" label="Phone Number" value={this.state.phone_num} onChange={this.onHandleChange} className="uucss-input"/>
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
					  <Modal trigger={<Input type="text" name="appoint_date" value={this.state.appoint_date} label='Date' className="uucss-input" readOnly/>} closeIcon>
					    <Header className="uucss-modal-header" icon='calendar outline' content='Set date' />
					    <Modal.Content>
						    <Form>
							    {this.state.appointment_dates.map((d) => {
										// return (<li>{d.toDateString()}</li>)
										return (

											<Card className="uucss-card">
										    <Card.Content>
										    	<div style={ {backgroundColor:'red',} }>
										      </div>
										      <Card.Header textAlign="left" className="uucss-card-header" >
										        <Form.Field>
											      	<Radio
											      		className = "uucss-card-date"
										            label = {d.toDateString()}
										            name = 'date'
										            value = {d.toDateString()}
										            checked = {this.state.appoint_date === d.toDateString()}
										            onChange = {this.onDateChange}
										          />
										        </Form.Field>
										      </Card.Header>
										      <Divider />
										      <Card.Description>
										      	<Grid column={1}>
										      		<Grid.Row column={1}>
											      		<Grid.Column width={6}>
																  <Card className="uucss-card uucss-date-detail">
																    <Card.Content>	
																      <Card.Header textAlign="center" className="uucss-in-card">
																      	25
																      </Card.Header>
																    </Card.Content>
																  </Card>
																  <div>
																    <Header sub textAlign="center" className="uucss-maroon">Last Number</Header>
																  </div>
											      		</Grid.Column>
											      		<Grid.Column width={10}>
											      			 <Card className="uucss-card uucss-date-detail">
																    <Card.Content>
																      <Card.Header textAlign="center" className="uucss-in-card">
																      	11:20 am
																      </Card.Header>
																    </Card.Content>
																  </Card>
																  <div>
																    <Header sub textAlign="center" className="uucss-maroon">Estimated Service Time</Header>
																  </div>
											      		</Grid.Column>
										      		</Grid.Row>
										      	</Grid>
										      </Card.Description>
										    </Card.Content>
										  </Card>

										)
									})}

								</Form>
					    </Modal.Content>
					  </Modal>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={2}>
					<Grid.Column computer={4} mobile={8}>
						<Button className="uucss-btn" onClick={this.saveData}> Done </Button>
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
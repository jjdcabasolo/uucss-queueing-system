import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header, Image, Input } from 'semantic-ui-react';
import './assets/SetApp.css';
import Icon from './assets/person.png';
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
			serving_num: this.props.serving_num
		}

		this.onHandleChange = this.onHandleChange.bind(this);
		this.saveData = this.saveData.bind(this);
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
			appoint_date: new Date(),
			phone_num: this.state.phone_num,
			queue_num: 0
		}

		// get reference for the date
		let date = data.appoint_date.getDate() + "" + data.appoint_date.getMonth() + "" + data.appoint_date.getFullYear();
		console.log("date");
		console.log(date);

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
		this.props.history.push("/main");
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
						<Link to="/datepicker">
							<Input label='Date' className="uucss-input"/>
						</Link>
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
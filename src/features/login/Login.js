import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header, Image, Input } from 'semantic-ui-react'

import './assets/Login.css';
import Icon from './assets/person.png';
import firebase, { auth, provider } from '../../firebase';


class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: this.props.value.first_name,
			middle_name: this.props.value.middle_name,
			last_name: this.props.value.last_name,
			plate_no: this.props.value.plate_no,
			phone_num: '',
			user: this.props.value.user,
			code: '',
			isLoggedIn: this.props.value.isLoggedIn
		}		

		console.log("ahdsfuhs");
		console.log(this.state);
		
		this.getUsers = this.getUsers.bind(this);
		this.onSignInSubmit = this.onSignInSubmit.bind(this);
		this.inputCode = this.inputCode.bind(this);
		this.onHandleChange = this.onHandleChange.bind(this);
	}

	onHandleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSignInSubmit = () => {
		const phoneNumber = this.state.phone_num;
		const appVerifier = window.recaptchaVerifier;
		firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
		    .then(function (confirmationResult) {
		      // SMS sent. Prompt user to type the code from the message, then sign the
		      // user in with confirmationResult.confirm(code).
		      window.confirmationResult = confirmationResult;
		      this.inputCode(confirmationResult);

		    }).catch(function (error) {
		      // grecaptcha.reset(window.recaptchaWidgetId);
		      console.log(error);
		    });
	}

	inputCode = (confirmationResult) => {
		const code = parseInt(prompt("Enter verification code here "));
		confirmationResult.confirm(code).then(function (result) {
		  // User signed in successfully.
		  const user = result.user;
		  const credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);
		  firebase.auth().signInWithCredential(credential);
		}).catch(function (error) {
		  console.log(error);
		});
	}

	getUsers = () => {
		console.log(this.state);
		const data = {
			first_name: this.state.first_name,
			middle_name: this.state.middle_name,
			last_name: this.state.last_name,
			plate_no: this.state.plate_no,
			phone_num: this.state.phone_num,
			isLoggedIn: this.state.isLoggedIn
		}

	  const queueRef = firebase.database().ref("queueing_sys/queue/");

		// get data to database
		queueRef.once('value', (snapshot) => {
		  const queueList = snapshot.val();

			for (const key in queueList) {
				for (const people in queueList[key]) {
					if(queueList[key][people]["phone_num"] == data.phone_num){
						console.log("MATCH NAAAA");
						const details = queueList[key][people];
						data.first_name = details["first_name"];
						data.middle_name = details["middle_name"];
						data.last_name = details["last_name"];
						data.plate_no = details["plate_no"];
						data.appoint_date = details["appoint_date"];
						data.phone_num = details["phone_num"];
						data.queue_num = details["queue_num"];
						data.isLoggedIn = true;

						console.log(data);
						this.props.toggle();
						this.props.action(data);
						this.props.history.push("/");

						break;
					}
				}
			}
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
								LOGIN<br />
								UPLB Unified Car Sticker System
							</Header>
						</div>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={1}>
					<Grid.Column computer={8} mobile={16}>
						<Input type="text" name="phone_num" label="Phone Number" value={this.state.phone_num} onChange={this.onHandleChange} className="uucss-input"/>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={2}>
					<Grid.Column computer={4} mobile={8}>
						<Button className="uucss-btn" id="login" onClick={this.getUsers}> Login </Button>
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

export default Login;
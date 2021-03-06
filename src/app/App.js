import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Grid } from 'semantic-ui-react';

// import Splash from '../features/splash/Splash';

import Help from '../features/help/Help';
import Login from '../features/login/Login';
import Main from '../features/main/Main';
import SetApp from '../features/setApp/SetApp';

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			isLoggedIn: false,
			last_name: null,
			middle_name: null,
			first_name: null,
			appoint_date: null,
			plate_num: null,
			phone_num: '',
			appointment_dates: [],
			queue_num: 0,
			serving_num: 0
		}

		this.handler = this.handler.bind(this);
		this.match = this.match.bind(this);
	}

	handler = (info) => {
		console.log(info)
		console.log(info.isLoggedIn)
		this.setState({
			first_name: info.first_name,
			middle_name: info.middle_name,
			last_name: info.last_name,
			plate_no: info.plate_no,
			appoint_date: info.appoint_date,
			phone_num: info.phone_num,
			queue_num: info.queue_num,
			isLoggedIn: info.isLoggedIn
		}, () => {
			console.log(this.state)
		});
	}

	match = () => {
		this.setState({
			isLoggedIn: true
		}, () => {
			console.log(this.state.isLoggedIn)
			this.state.isLoggedIn = true;
			// console.log(this.state)
		});
	}

  render() {
    return (
			<div className="uucss-center-content-outer">
			  <div className="uucss-center-content-middle">
			    <div className="uucss-center-content-inner">
				    <Switch>
					    <Route exact path='/' render={(props) => (
							  <Main {...props} value={this.state} action={this.handler} />
							)}/>
					    <Route path='/help' render={(props) => (
							  <Help {...props} value={this.state} action={this.handler} />
							)}/>
					    <Route path='/login' render={(props) => (
							  <Login {...props} value={this.state} action={this.handler} toggle={this.match}/>
							)}/>
					    <Route path='/setapp' render={(props) => (
							  <SetApp {...props} value={this.state} action={this.handler} toggle={this.match}/>
							)}/>
					  </Switch>
			    </div>
			  </div>
			</div>
    );
  }
}

export default App;
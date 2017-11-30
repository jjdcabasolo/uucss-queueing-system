import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Grid } from 'semantic-ui-react';

// import Splash from '../features/splash/Splash';

import DatePicker from '../features/datePicker/DatePicker';
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
			appointment_dates: []
		}
	}

  render() {
    return (
			<div className="uucss-center-content-outer">
			  <div className="uucss-center-content-middle">
			    <div className="uucss-center-content-inner">
				    <Switch>
					    <Route exact path='/'component={Main} />
					    <Route path='/help' render={(props) => (
							  <Help {...props} value={this.state.value} />
							)}/>
					    <Route path='/login' render={(props) => (
							  <Help {...props} value={this.state.value} />
							)}/>
					    <Route path='/setapp' render={(props) => (
							  <SetApp {...props} value={this.state.value} />
							)}/>
					    <Route path='/datePicker' component={DatePicker}/>
					  </Switch>
			    </div>
			  </div>
			</div>
    );
  }
}

export default App;
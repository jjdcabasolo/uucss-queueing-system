import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import Splash from '../features/splash/Splash';

import DatePicker from '../features/datePicker/DatePicker';
import Help from '../features/help/Help';
import Login from '../features/login/Login';
import Main from '../features/main/Main';
import SetApp from '../features/setApp/SetApp';

import './App.css';

const LinkingPages = () => (
  <Switch>
    <Route exact path='/' component={Main}/>
    <Route path='/help' component={Help}/>
    <Route path='/login' component={Login}/>
    <Route path='/setapp' component={SetApp}/>
    <Route path='/datePicker' component={DatePicker}/>
  </Switch>
)

class App extends Component {
  render() {
    return (
			<div class="uucss-center-content-outer">
			  <div class="uucss-center-content-middle">
			    <div class="uucss-center-content-inner">
				    <LinkingPages />
			    </div>
			  </div>
			</div>
    );
  }
}
			    	// <SetApp />
			    	// <Help />
			    	// <DatePicker />
			    	// <Login />


	    // <Splash />
	   
export default App;
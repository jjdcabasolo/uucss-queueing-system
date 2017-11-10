import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import Splash from '../features/splash/Splash';

import DatePicker from '../features/datePicker/DatePicker';
import Help from '../features/help/Help';
import Login from '../features/login/Login';
import Main from '../features/main/Main';
import SetApp from '../features/setApp/SetApp';

import './App.css';

class App extends Component {
  render() {
    return (
		<div class="uucss-center-content-outer">
		  <div class="uucss-center-content-middle">
		    <div class="uucss-center-content-inner">
			    <Main />
		    </div>
		  </div>
		</div>
    );
  }
}

		    	// <SetApp />
		    	// <DatePicker />
		    	// <Help />
		    	// <Login />
			    // <Splash 	/>

export default App;
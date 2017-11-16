import React, { Component } from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';

import './assets/Splash.css';
import UPLBlogo from './assets/UPLBlogo.png';

class Splash extends Component {
  render() {
    return (
			<div id="uucss-splash-outer">
			  <div id="uucss-splash-middle">
			    <div id="uucss-splash-inner">
			    	<Grid container columns={4}>
							<Grid.Row column={1}>
								<Grid.Column centered computer={16}>
									<Image src={ UPLBlogo } centered className="uucss-logo"/>
									<Header as='h1' textAlign="center" id="uucss-splash">
										<br />
										UPLB Unified<br />
										Car Sticker System
									</Header>
								</Grid.Column>
							</Grid.Row>	
						</Grid>
			    </div>
			  </div>
			</div>
    );
  }
}

export default Splash;
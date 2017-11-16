import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Grid, Header, Image, Label } from 'semantic-ui-react'

import './assets/Main.css';
import UPLBlogo from './assets/UPLBlogo.png';

class Main extends Component {
  render() {
    return (
    	<Grid container columns={4}>
				<Grid.Row column={1}>
					<Grid.Column centered computer={16}>
						<Image src={ UPLBlogo } centered className="uucss-logo"/>
						<Header as='h1' block textAlign="center" className="uucss-maroon-header">
							<br />
							UPLB Unified<br />
							Car Sticker System
						</Header>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={1}>
					<Grid.Column centered computer={8} mobile={16}>
					  <Card className="uucss-card">
					    <Card.Content>
					      <Card.Header className="uucss-card-header">
					      	No ongoing appointment today.
					      </Card.Header>
					      <Card.Description className="uucss-card-desc">
					      	However, you can try setting an appointment in another date. Below is a list of possible dates. <br /><br />
					      	- 04 October 2017 (Monday) <br />
					      	- 05 October 2017 (Tuesday) <br />
					      	- 06 October 2017 (Wednesday)
					      </Card.Description>
					    </Card.Content>
					  </Card>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={2}>
					<Grid.Column centered computer={4} mobile={8}>
						<Link to="/setapp">
							<Button className="uucss-btn"> Set </Button>
						</Link>
					</Grid.Column>
					<Grid.Column centered computer={4} mobile={8}>
						<Link to="/help">
							<Button className="uucss-btn"> Help </Button>
						</Link>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={1}>
					<Grid.Column computer={4} tablet={4} mobile={12}>
						<Link to="/login">
						  <Label id="uucss-appointment">
						  	Already have an appointment? Click here.
						  </Label>
					  </Link>
  				</Grid.Column>
				</Grid.Row>
			</Grid>
		);
  }
}

export default Main;
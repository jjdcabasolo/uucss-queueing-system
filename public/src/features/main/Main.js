import React, { Component } from 'react';
import { Button, Card, Grid, Header, Image, Label } from 'semantic-ui-react'

import './assets/Main.css';
import UPLBlogo from './assets/UPLBlogo.png';

class Main extends Component {
  render() {
    return (
    	<Grid container columns={4}>
				<Grid.Row column={1}>
					<Grid.Column centered computer={16}>
						<Image src={ UPLBlogo } centered className="uucss-logo medium"/>
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
					        Matthew
					      </Card.Header>
					      <Card.Description className="uucss-card-desc">
					        Matthew is a musician living in Nashville.
					      </Card.Description>
					    </Card.Content>
					  </Card>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={2}>
					<Grid.Column centered computer={4} mobile={8}>
						<Button className="uucss-btn"> Set </Button>
					</Grid.Column>
					<Grid.Column centered computer={4} mobile={8}>
						<Button className="uucss-btn"> Help </Button>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={1}>
					<Grid.Column computer={4} tablet={4} mobile={12}>
					  <Label id="uucss-appointment">
					  	Already have an appointment? Click here.
					  </Label>
  				</Grid.Column>
				</Grid.Row>
			</Grid>
		);
  }
}

export default Main;
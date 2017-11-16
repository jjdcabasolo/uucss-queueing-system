import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header } from 'semantic-ui-react'

import './assets/DatePicker.css';

const DateCard = () => (
	<Grid.Row centered column={1} className="uucss-remove-top">
		<Grid.Column centered computer={8} mobile={16}>
		  <Card className="uucss-card">
		    <Card.Content>
		    	<div style={ {backgroundColor:'red',} }>
		      </div>
		      <Card.Header textAlign="left" className="uucss-card-header" id="uucss-card-date">
		      	<Checkbox  />
		        &nbsp;04 October 2017 (Mon)
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
		</Grid.Column>
	</Grid.Row>
)

class DatePicker extends Component {
  render() {
    return (
    	<Grid container columns={4}>
				<Grid.Row column={1}>
					<Grid.Column centered computer={16}>
						<Header as='h1' block textAlign="center" className="uucss-maroon-header" id="uucss-header-first">
							AVAILABLE DATES<br />
							UPLB Unified Car Sticker System
						</Header>
					</Grid.Column>
				</Grid.Row>	

				<DateCard />
				<DateCard />

				<Grid.Row centered column={2}>
					<Grid.Column centered computer={4} mobile={8}>
						<Link to="/setapp">
							<Button className="uucss-btn"> Back </Button>
						</Link>
					</Grid.Column>
					<Grid.Column centered computer={4} mobile={8}>
						<Link to="/setapp">
							<Button className="uucss-btn"> Choose </Button>
						</Link>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
  }
}

export default DatePicker;
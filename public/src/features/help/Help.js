import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Grid, Header } from 'semantic-ui-react'

import './assets/Help.css';

class Help extends Component {
  render() {
    return (
    	<Grid container columns={4}>
				<Grid.Row column={1}>
					<Grid.Column centered computer={16}>
						<Header as='h1' block textAlign="center" className="uucss-maroon-header" id="uucss-header-first">
							HELP<br />
							UPLB Unified Car Sticker System
						</Header>
					</Grid.Column>
				</Grid.Row>	

				<Grid.Row centered column={1}>
					<Grid.Column centered computer={16}>
					  <Card className="uucss-card" id="uucss-help">
					    <Card.Content>
					      <Card.Header className="uucss-card-header" id="uucss-header-help">
					        What the hell is this app?
					      </Card.Header>
					      <Card.Description className="uucss-card-desc" id="uucss-header-content">
					      	Alcohol boy Tokyo 8-bit chrome paranoid beef noodles boat systemic corrupted. Claymore mine silent semiotics RAF range-rover neural soul-delay modem. Refrigerator augmented reality shoes modem tiger-team Kowloon Legba otaku construct 3D-printed sign tube claymore mine. 
					      </Card.Description>
					      <Card.Header className="uucss-card-header" id="uucss-header-help">
					        So, why use this app?
					      </Card.Header>
					      <Card.Description className="uucss-card-desc" id="uucss-header-content">
									Cartel narrative nodal point military-grade shrine computer dead. Claymore mine range-rover nodal point camera wonton soup gang jeans tower motion apophenia stimulate otaku lights advert corporation. Refrigerator military-grade 8-bit marketing bridge futurity garage office motion pen weathered. 3D-printed tower jeans market assault katana Legba girl. Fetishism girl semiotics wristwatch wonton soup network gang Legba urban tiger-team-space.-space convenience store refrigerator camera courier kanji gang concrete beef noodles modem. 					      	Alcohol boy Tokyo 8-bit chrome paranoid beef noodles boat systemic corrupted. Claymore mine silent semiotics RAF range-rover neural soul-delay modem. Refrigerator augmented reality shoes modem tiger-team Kowloon Legba otaku construct 3D-printed sign tube claymore mine. 
					      </Card.Description>
					    </Card.Content>
					  </Card>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={2}>
					<Grid.Column centered computer={4} mobile={8}>
						<Link to="/">
							<Button className="uucss-btn"> Back </Button>
						</Link>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
  }
}

export default Help;
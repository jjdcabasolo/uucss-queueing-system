import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Checkbox, Grid, Divider, Header, Icon, Image, Label, Modal } from 'semantic-ui-react'

import './assets/Main.css';
import UPLBlogo from './assets/UPLBlogo.png';

const Dates = () => (
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
)

const ModalReschedule = () => (
  <Modal trigger={<Button>Reschedule</Button>} closeIcon>
    <Header className="uucss-modal-header" icon='calendar outline' content='Reschedule' />
    <Modal.Content>
    	<Dates> </Dates>
    </Modal.Content>
    <Modal.Actions>
    	<Grid container columns={4}>
	      <Grid.Row centered column={2}>
					<Grid.Column computer={4} mobile={8}>
			      <Button className="uucss-btn">  
			        <Icon name='remove' /> Cancel
			      </Button>
					</Grid.Column>
					<Grid.Column computer={4} mobile={8}>
			      <Button className="uucss-btn">  
			        <Icon name='checkmark' /> Confirm
			      </Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
    </Modal.Actions>
  </Modal>
)

const ModalSkipped = () => (
  <Modal trigger={<Button>Skipped</Button>} closeIcon>
    <Header className="uucss-modal-header" icon='random' content="You've been skipped." />
    <Modal.Content>
	    <Card className="uucss-card">
		    <Card.Content>
		      <Card.Header className="uucss-card-header">
		      	Please proceed to the UPLB University Police Force Headquarters. <br /> <br />
		      	Appointment time: 1:00pm <br /> <br />
		      </Card.Header>
		      <Card.Description className="uucss-card-desc">
		      	Note: If you cannot make it within two (2) minutes from your appointment time, you will be moved ten (10) slots from your current number.
		      </Card.Description>
		    </Card.Content>
		  </Card>
    </Modal.Content>
    <Modal.Actions>
    	<Grid container columns={4}>
	      <Grid.Row centered column={2}>
					<Grid.Column computer={4} mobile={8}>
			      <Button className="uucss-btn">  
			        <Icon name='remove' /> Cancel
			      </Button>
					</Grid.Column>
					<Grid.Column computer={4} mobile={8}>
			      <Button className="uucss-btn">  
			        <Icon name='checkmark' /> Okay
			      </Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
    </Modal.Actions>
  </Modal>
)

const ModalTurn = () => (
  <Modal trigger={<Button>Your turn</Button>} closeIcon>
    <Header className="uucss-modal-header" icon='random' content="It's almost your turn." />
    <Modal.Content>
	    <Card className="uucss-card">
		    <Card.Content>
		      <Card.Header className="uucss-card-header">
		      	Unfortunately, you did not showed up during your appointment. <br /> <br />
		      	You've been automatically listed on 04 October 2017 (Monday). <br /> <br />
		      	Would you like to confirm or set a new appointment date?
		      </Card.Header>
		    </Card.Content>
		  </Card>
    </Modal.Content>
    <Modal.Actions>
    	<Grid container columns={4}>
	      <Grid.Row centered column={2}>
					<Grid.Column computer={4} mobile={8}>
			      <Button className="uucss-btn">  
			        <Icon name='remove' /> Cancel
			      </Button>
					</Grid.Column>
					<Grid.Column computer={4} mobile={8}>
			      <Button className="uucss-btn">  
			        <Icon name='checkmark' /> Confirm
			      </Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
    </Modal.Actions>
  </Modal>
)

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = props;
	}

  render() {
    return (
    	<Grid container columns={4}>
				<Grid.Row centered column={1}>
					<Grid.Column computer={16}>
						<Image src={ UPLBlogo } centered className="uucss-logo"/>
						<Header as='h1' block textAlign="center" className="uucss-maroon-header">
							<br />
							UPLB Unified<br />
							Car Sticker System
						</Header>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row centered column={1}>
					<Grid.Column computer={8} mobile={16}>
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
					<Grid.Column computer={4} mobile={8}>
						<Link to="/setapp">
							<Button className="uucss-btn"> Set </Button>
						</Link>
					</Grid.Column>
					<Grid.Column computer={4} mobile={8}>
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

				<ModalReschedule></ModalReschedule>
				<ModalSkipped></ModalSkipped>
				<ModalTurn></ModalTurn>
			</Grid>
		);
  }
}

export default Main;
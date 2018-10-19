import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="nameCompany" sm={2}>Name/Company Name</Label>
          <Col sm={5}>
            <Input type="text" name="nameOf" id="nameCompany" placeholder="Enter your name or name of the company" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="activityEvent" sm={2}>Name of activity</Label>
          <Col sm={5}>
            <Input type="text" name="activity" id="activityEvent" placeholder="Please enter the name of activity" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="activityDetail" sm={2}>Detail of activity</Label>
          <Col sm={5}>
            <Input type="text" name="activityDetail" id="activityDetail" placeholder="Please enter short description of the activity" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="inviteType" sm={2}>Invite Type</Label>
          <Col sm={5}>
            <Input type="text" name="inviteTypePick" id="inviteTypePick" placeholder="Enter the type of invitation" />

          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelectMulti" sm={2}>Date and Time of event</Label>
          <Col sm={5}>
            <Input type="text" name="selectMulti" id="exampleSelectMulti" multiple placeholder="Enter date and time" />
          </Col>
        </FormGroup>

      <FormGroup check row>
          <Col sm={{ size: 20, offset: 3 }}>
            <Button><strong><big>Submit</big></strong></Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

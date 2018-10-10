import React, { Component } from 'react';

import {
  CardBody,
  Col,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

class CreateIntersection extends Component{
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }




  handleChange(evt){
      this.props.onChange(this.props.index,evt);
  }


  render(){

    return(
      <CardBody>
        <FormGroup row>
          <Col>
            <Label>Longitude</Label>
              <Input type="number" id="number-input" name="longitude" value={this.props.intersection["sensorList"][this.props.index]["longitude"]} placeholder="Insert longitudine..." onChange={this.handleChange} required />

          </Col>
          <Col>
            <Label>Latitude</Label>
              <Input type="number" id="number-input" name="latitude" value={this.props.intersection["sensorList"][this.props.index]["latitude"]} placeholder="Insert latitudine..." onChange={this.handleChange} required />

          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="6">
            <FormGroup>
              <Label htmlFor="text-input">Saturation</Label>
              <Input type="number" id="number-input" name="saturation" value={this.props.intersection["sensorList"][this.props.index]["saturation"]} placeholder="Insert saturation..." onChange={this.handleChange} required />
            </FormGroup>
          </Col>
        </FormGroup>
      </CardBody>
    );
  }
}
export default CreateIntersection;

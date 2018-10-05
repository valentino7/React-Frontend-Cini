import React, { Component } from 'react';
import {
    Card,
    CardBody,
    Col,
    Modal,
    ModalBody,
    FormGroup,
    ModalFooter,
    Label,
    Input,
    ModalHeader,
} from 'reactstrap';

const Fields =
    ["NORD SEMAPHORE", "SUD SEMAPHORE", "OVEST SEMAPHORE", "EST SEMAPHORE"];

class ShowIntersection extends Component {
    constructor(props) {
        super(props);
        this.body = this.body.bind(this);

        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: true,
        };

    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };



    body(i){
        return (<CardBody>
            <FormGroup row>
                <Col>
                    <Label>Longitude</Label>
                    <Input type="number" value={this.props.intersection["semaphoreList"][i]["longitude"]}  disabled="disabled"  />

                </Col>
                <Col>
                    <Label>Latitude</Label>
                    <Input type="number" value={this.props.intersection["semaphoreList"][i]["latitude"]} disabled="disabled"  />

                </Col>
            </FormGroup>
            <FormGroup row>
                <Col md="6">
                    <FormGroup>
                        <Label htmlFor="text-input">Saturation</Label>
                        <Input type="number"value={this.props.intersection["semaphoreList"][i]["saturation"]}  disabled="disabled" />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label htmlFor="text-input">Tempo rosso</Label>
                        <Input type="number" value={this.props.intersection["semaphoreList"][i]["red"]} disabled="disabled"  />
                    </FormGroup>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col md="6">
                    <FormGroup>
                        <Label htmlFor="text-input">Tempo verde</Label>
                        <Input type="number"  value={this.props.intersection["semaphoreList"][i]["green"]}  disabled="disabled"   />
                    </FormGroup>
                </Col>

            </FormGroup>
        </CardBody>)
    }

    render() {
        return (

            <div>
                <i style={{cursor:"pointer"}} onClick={this.toggle} className="fa fa-plus fa-lg mt-1" /><br />
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}><strong>Show Intersection</strong></ModalHeader>
                    <ModalBody>
                        <div className="animated fadeIn">
                            <Card>
                                    <CardBody>

                                        <React.Fragment>
                                            <Col md="9">
                                                <p style={{"font-size":'150%'}} align="center"><b>{Fields[0]}</b></p>
                                                {this.body(0)}
                                                <hr/>
                                                <p style={{"font-size":'150%'}} align="center" ><b>{Fields[1]} </b></p>
                                                {this.body(1)}
                                                <hr/>
                                                <p style={{"font-size":'150%'}} align="center"><b>{Fields[2]} </b></p>
                                                {this.body(2)}
                                                <hr/>
                                                <p style={{"font-size":'150%'}}   align="center"><b>{Fields[3]} </b></p>
                                                {this.body(3)}

                                            </Col>
                                        </React.Fragment>

                                    </CardBody>

                            </Card>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ShowIntersection;

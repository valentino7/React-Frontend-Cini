import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Form,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import CreateIntersection from '../AddIntersection';
const Fields =
    ["NORD SEMAPHOR", "SUD SEMAPHOR", "OVEST SEMAPHOR", "EST SEMAPHOR"];

class UpdateIntersection extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: true,
        intersection:{}

    };
    this.onChange = this.onChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
      this.initList = this.initList.bind(this);

     // this.initList();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

    initList(){

        this.state.intersection["semaphoreList"]=[];
        for ( let i = 0 ; i< 4 ; i++){
            this.state.intersection["semaphoreList"][i]={"red":""};
            this.state.intersection["semaphoreList"][i]={"longitudine":""};
            this.state.intersection["semaphoreList"][i]={"latitudine":""};
            this.state.intersection["semaphoreList"][i]={"saturation":""};
            this.state.intersection["semaphoreList"][i]={"green":""};
        }
        this.setState(this.state)
        //this.state.intersection["semaphor"]=[{"red":""}];
        /* this.state.ticket["sem"] = {
             "red" : "",
         };*/
        //console.log(this.state.intersection["red"]);
    }


  handleUpdate = (e) => {
    e.preventDefault();

    this.props.onUpdate(this.state.intersection );
    this.onChange = this.onChange.bind(this);
    this.toggle();
  };

    componentDidMount() {
        this.state.intersection["semaphoreList"]=[];
        this.state.intersection["id"]="";
        for ( let i = 0 ; i< 4 ; i++){
            this.state.intersection["semaphoreList"][i]={"red":""};
            this.state.intersection["semaphoreList"][i]={"longitude":""};
            this.state.intersection["semaphoreList"][i]={"latitude":""};
            this.state.intersection["semaphoreList"][i]={"saturation":""};
            this.state.intersection["semaphoreList"][i]={"green":""};
        }
        this.state.intersection["id"]=this.props.intersection["id"];
        for ( let i = 0 ; i< 4 ; i++){
            this.state.intersection["semaphoreList"][i]["red"]=this.props.intersection["semaphoreList"][i]["red"];
            this.state.intersection["semaphoreList"][i]["longitude"]=this.props.intersection["semaphoreList"][i]["longitude"];
            this.state.intersection["semaphoreList"][i]["latitude"]=this.props.intersection["semaphoreList"][i]["latitude"];
            this.state.intersection["semaphoreList"][i]["saturation"]=this.props.intersection["semaphoreList"][i]["saturation"];
            this.state.intersection["semaphoreList"][i]["green"]=this.props.intersection["semaphoreList"][i]["green"];
        }
        this.setState(this.state);
    }


    onChange(i,evt) {
        this.state.intersection["semaphoreList"][i][evt.target.name]= evt.target.value;
        this.setState(this.state);
    }


  render() {

    return (

      <div>
        <i style={{cursor:"pointer"}} onClick={this.toggle} className="fa fa-pencil fa-lg mt-1"/><br />
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><strong>Edit Intersection</strong></ModalHeader>
          <ModalBody>
            <div className="animated fadeIn">
              <Card>
                <Form onSubmit={this.handleUpdate} className="was-validated">
                  <CardBody>

                    <React.Fragment>
                      <Col md="9">
                          <p style={{"font-size":'150%'}} align="center"><b>{Fields[0]}</b></p>
                          <CreateIntersection {...this.state} index={0} onChange={this.onChange}  />
                          <hr/>
                          <p style={{"font-size":'150%'}} align="center" ><b>{Fields[1]} </b></p>
                          <CreateIntersection {...this.state}  onChange={this.onChange}  index={1}  />
                          <hr/>
                          <p style={{"font-size":'150%'}} align="center"><b>{Fields[2]} </b></p>
                          <CreateIntersection {...this.state}  onChange={this.onChange}   index={2}  />
                          <hr/>
                          <p style={{"font-size":'150%'}}   align="center"><b>{Fields[3]} </b></p>
                          <CreateIntersection {...this.state}  onChange={this.onChange}   index={3} />
                      </Col>
                    </React.Fragment>

                  </CardBody>
                  <CardFooter>
                    <Button size="sm" color="primary" type="submit"><i className="fa fa-dot-circle-o"/> Update</Button>
                  </CardFooter>
                </Form>
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

export default UpdateIntersection;

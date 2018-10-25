import React, { Component } from 'react';
import CreateIntersection from "../AddIntersection";
import {
    Button,
    CardBody,
    Card,
    FormGroup,
    Label,
    Input,
    CardFooter,
    CardHeader,
    Col,
    Form,
} from 'reactstrap';
import { URL_CREATE_INTERSECTION} from '../../../_constants/configurationConstants';
import { NotificationManager} from 'react-notifications';

const Fields =
    ["NORD SEMAPHORE", "SUD SEMAPHORE", "OVEST SEMAPHORE", "EST SEMAPHORE"];


class ControlIntersection extends Component{

  constructor(props) {
    super(props);

    this.state = {
        hiddenTarget: false,
        red1:"",
        red2:"",
        green1:"",
        green2:"",
        intersection:{},
        name: "",
        version: "",
        typology : [],
        typId : "",
    };
    this.onChangePhase = this.onChangePhase.bind(this);
    this.phases = this.phases.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.createNotification = this.createNotification.bind(this);
    this.hiddenTarget = this.hiddenTarget.bind(this);

    this.initList = this.initList.bind(this);

    this.initList();

  }

    initList(){
        this.state.intersection["sensorList"]=[];
        this.state.intersection["listPhase"]=[];

        for ( let i = 0 ; i< 4 ; i++){
            this.state.intersection["sensorList"][i]={"trafficLight":""};
            this.state.intersection["sensorList"][i]={"longitude":""};
            this.state.intersection["sensorList"][i]={"latitude":""};
            this.state.intersection["sensorList"][i]={"saturation":""};
        }
        for ( let i = 0 ; i< 4 ; i++)
            this.state.intersection["sensorList"][i]={"trafficLight":i};

        this.state.intersection["listPhase"][0] = {"redTime": ""};
        this.state.intersection["listPhase"][0] = {"greenTime": ""};
        this.state.intersection["listPhase"][1] = {"redTime": ""};
        this.state.intersection["listPhase"][1] = {"greenTime": ""};

        this.setState(this.state)
        //this.state.intersection["semaphor"]=[{"red":""}];
       /* this.state.ticket["sem"] = {
            "red" : "",
        };*/
        //console.log(this.state.intersection["red"]);
    }

  createNotification(type, message, title) {
    switch (type) {
      case "alert-success":
        NotificationManager.success(message.toString(), title, 3000);
        break;
      case "alert-danger":
        NotificationManager.error(message.toString(), title, 5000);
        break;
      default:
        break;
    }
  }

  handleClick(e){
    e.preventDefault();
    console.log("SUBMIT");
    console.log(this.state.intersection["sensorList"][0]);
    this.state.intersection["listPhase"][0]["redTime"]=this.state.red1;
    this.state.intersection["listPhase"][0]["greenTime"]=this.state.green1;
    this.state.intersection["listPhase"][1]["redTime"]=this.state.red2;
    this.state.intersection["listPhase"][1]["greenTime"]=this.state.green2;
    this.setState(this.state);
    fetch(URL_CREATE_INTERSECTION, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
          this.state.intersection

      )
    }).then( (response)=> {
      if (response.ok) {
        this.createNotification("alert-success","Intersection CREATED","Intersection has been successfully created");
        window.location.href = 'http://localhost:3000/#/intersection/ListIntersection';
      } else{
        response.json().then((r)=>{
            this.createNotification("alert-danger",r.title,r.text);
          }
        );
      }

    });

  }

  onChange(i,evt){
   // this.setState({ intersection["red"] : evt.target.value });

     /* this.state.intersection["semaphor"][0] = evt.target.value;
      this.setState(this.state);*/



      /*this.state.intersection["semaphor"][i]= {
          ["red"]: this.state.red,
          ["longitudine"]: this.state.longitudine,
          ["latitudine"] : this.state.latitudine,
          ["green"]: this.state.green,
          ["saturation"]: this.state.saturation,

      };*/
      //this.setState(this.state.intersection["semaphor"][i]["red"], e );

      this.state.intersection["sensorList"][i][evt.target.name]= evt.target.value;
      this.setState(this.state);

  }

    onChangePhase(evt){
        // this.setState({ intersection["red"] : evt.target.value });

        /* this.state.intersection["semaphor"][0] = evt.target.value;
         this.setState(this.state);*/



        /*this.state.intersection["semaphor"][i]= {
            ["red"]: this.state.red,
            ["longitudine"]: this.state.longitudine,
            ["latitudine"] : this.state.latitudine,
            ["green"]: this.state.green,
            ["saturation"]: this.state.saturation,

        };*/
        //this.setState(this.state.intersection["semaphor"][i]["red"], e );

        this.setState({[evt.target.name]: evt.target.value});

    }

  hiddenTarget(){
    this.setState({hiddenTarget: !this.state.hiddenTarget});
    if(this.state.hiddenTarget)
      document.getElementById("card-target").style.display = "block";
    else
      document.getElementById("card-target").style.display = "none";
  }


    phases(){
        return (<CardBody>
            <p style={{"font-size":'150%'}} align="center"><b>Phase 0</b></p>
            <FormGroup row>
                <Col>
                    <Label>Red time</Label>
                    <Input type="number" name="red1" id="number-input"  value={this.state.red1}  onChange={this.onChangePhase} required   />

                </Col>
                <Col>
                    <Label>Green time</Label>
                    <Input type="number" name="green1" id="number-input"  value={this.state.green1} onChange={this.onChangePhase} required   />

                </Col>
            </FormGroup>
            <hr/>
            <p style={{"font-size":'150%'}} align="center"><b>Phase 1</b></p>

            <FormGroup row>
                <Col>
                    <Label>Red time</Label>
                    <Input type="number" name="red2" id="number-input"  value={this.state.red2}  onChange={this.onChangePhase} required  />

                </Col>
                <Col>
                    <Label>Green time</Label>
                    <Input type="number" name="green2" id="number-input"  value={this.state.green2} onChange={this.onChangePhase} required  />

                </Col>
            </FormGroup>
            <hr/>
        </CardBody>)
    }


  render(){

    return(

      <React.Fragment>
        <Col md="9">
          <Card>
            <CardHeader> <i className="fa fa-align-justify" onClick={this.hiddenTarget} style={{cursor:"pointer"}}/>
              <strong>Create your intersection</strong>
            </CardHeader>
              <Form id="card-target" style={{display: 'block'}} onSubmit={this.handleClick} encType="multipart/form-data" className="form-horizontal">
                <br/>
                  {this.phases()}

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

                <CardFooter>
                  <Button  type="submit" size="md" color="primary" > Submit</Button>
                  <Button type="reset" size="md" color="danger" > Reset</Button>
                </CardFooter>
              </Form>

          </Card>
        </Col>
      </React.Fragment>
    );
  }
}
export default ControlIntersection;

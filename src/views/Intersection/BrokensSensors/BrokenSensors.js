import React, { PureComponent } from 'react';
import {  Card, CardBody, CardHeader, Table } from 'reactstrap';
import { Redirect } from 'react-router';
import CustomPagination from "../../CustomPagination/CustomPagination";
import {
    RESULTS_PER_PAGE_TARGET_LIST,
    URL_REPAIR_SENSOR
} from '../../../_constants/configurationConstants';
import {NotificationManager} from 'react-notifications';
import Sensor from "../BrokensSensors/Sensor";

const showFieldsBrokenTable = ["id sensor","id Intersection","State Red","State Yellow","State Green","Repair"];

class BrokenSensors extends PureComponent{
    constructor(props) {

        super(props);

        this.state = {
            hiddenCardBroken:false,
            currentPageSensor: 1,
            id: "",
        };
        this.hiddenCardBroken = this.hiddenCardBroken.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.onRepair = this.onRepair.bind(this);
        this.createNotification = this.createNotification.bind(this);
        this.selectPageSensor = this.selectPageSensor.bind(this);
        this.selectLastPageSensor = this.selectLastPageSensor.bind(this);

    }

    hiddenCardBroken(){
        this.setState({hiddenCardBroken: !this.state.hiddenCardBroken});
        if(this.state.hiddenCardBroken)
            document.getElementById("card-broken").style.display = "block";
        else
            document.getElementById("card-broken").style.display = "none";
    }

    selectPageSensor(page) {
        this.setState({
            currentPageSensor: page
        });
    }

    selectLastPageSensor() {
        this.setState({
            currentPageSensor: Math.ceil(this.props.stateTrafficLight.length / RESULTS_PER_PAGE_TARGET_LIST)
        });
    }


    refreshList() {
        this.props.getElement();
    }


    onRepair(sensor) {
        fetch((URL_REPAIR_SENSOR), {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                sensor
            ),
        }).then( (response)=> {
            if (response.ok) {
                this.createNotification("alert-success","SENSOR REPAIRED","Sensor has been successfully repaired");
                this.refreshList();
            } else{
                response.json().then((r)=>{
                        this.createNotification("alert-danger",r.title,r.text);
                    }
                );
            }
        });
        this.refreshList();

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



    render() {
        console.log("componente ultimo"+this.props.stateTrafficLight);
        let sensors = this.props.stateTrafficLight.map((sensor,index)=>
            <Sensor key={sensor.id} sensor={sensor} index={index} onRepair={this.onRepair} />
        );

        const indexOfFirstSensor = RESULTS_PER_PAGE_TARGET_LIST * (this.state.currentPageSensor - 1);
        const indexOfLastSensor = RESULTS_PER_PAGE_TARGET_LIST * (this.state.currentPageSensor);
        let tableHeaderBroken = showFieldsBrokenTable.map((attribute,index) => {
            return (
                <th key={attribute} style={{"textAlign": "center"}}>{attribute}
                </th>
            );


        });
        const currentTableSensor = sensors.slice(indexOfFirstSensor, indexOfLastSensor);
        return (
            <div className="animated fadeIn">
                <Card  >
                    <CardHeader>
                        <i className="fa fa-align-justify" onClick={this.hiddenCardBroken} style={{cursor:"pointer"}}/><strong>Broken sensors</strong>
                    </CardHeader>
                    {typeof(this.props.stateTrafficLight[0]) !== 'undefined'   ?
                        <CardBody id="card-broken" style={{display: 'block'}}>
                            <Table style={{tableLayout:"fixed"}} responsive striped size="sm">
                                <thead bgcolor="#ADD8E6">
                                <tr>

                                    <th width="40px"><b>#</b></th>

                                    {tableHeaderBroken}

                                </tr>
                                </thead>
                                <tbody>
                                {currentTableSensor}
                                </tbody>

                            </Table>
                            <div align="center">
                                <div style={{display:"inline-block"}}>
                                    <CustomPagination numPages={Math.ceil(this.props.stateTrafficLight.length / RESULTS_PER_PAGE_TARGET_LIST)} selectPage={this.selectPageSensor} currentPage={this.state.currentPageSensor}/>
                                </div>
                            </div>

                        </CardBody>
                        : <div/>
                    }

                </Card>

            </div>

        );
    }
}
export default BrokenSensors;

import React, { PureComponent } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Table,
    Col,
    Form,
} from 'reactstrap';
import * as ConfigurationConstants from "../../_constants/configurationConstants";

const Header =
    ["Topology", "Throughput","Latency"];

const HeaderFields=["emitted", "completeLatency"];

class Statistics extends PureComponent{

    constructor(props) {
        super(props);

        this.state = {
            hiddenBody: false,
        };
        this.createTable = this.createTable.bind(this);
        this.hiddenBody = this.hiddenBody.bind(this);

    }



    hiddenBody(){
        this.setState({hiddenBody: !this.state.hiddenBody});
        if(this.state.hiddenBody)
            document.getElementById("card-body").style.display = "block";
        else
            document.getElementById("card-body").style.display = "none";
    }


    createTable(field) {
        let table = [];

        for(let i = 0;i!==Header.length;i++){
            table.push(
                (< td style={{"textAlign": "center"}} >{field[HeaderFields[i]]}</td>)
            )
        }
        return table
    };

    render(){

        let tableHeader = Header.map(attribute => {

            return (
                <th key={attribute} style={{"textAlign": "center"}}>{attribute}
                </th>
            );
        });
/*
        let currentTableBody = this.props.statistics.map((field,index)=>
            <tbody>

            < td >{index}</td>
            {this.createTable(field)}
            </tbody>

        );*/

        return(
            <Col md="9">
                <Card>
                    <CardHeader> <i className="fa fa-align-justify" onClick={this.hiddenBody} style={{cursor:"pointer"}}/>
                        <strong>Statistics</strong>
                    </CardHeader>
                    <Form id="card-body" style={{display: 'block'}}  encType="multipart/form-data" className="form-horizontal">

                        <CardBody id="card-list" style={{display: 'block'}}>
                            <Table style={{tableLayout:"fixed"}} responsive striped size="sm">
                                <thead bgcolor="#ADD8E6">
                                <tr>

                                    {tableHeader}

                                </tr>
                                </thead>
                                <tbody>
                                    <td style={{"textAlign": "center"}} >{0}</td>
                                    <td  style={{"textAlign": "center"}}>{this.props.statistics[0][HeaderFields[0]] / ConfigurationConstants.THROUGHPUT}</td>
                                    <td  style={{"textAlign": "center"}}>{this.props.statistics[0][HeaderFields[1]]}</td>


                                </tbody>
                                <tbody>
                                <td style={{"textAlign": "center"}} >{1}</td>
                                <td  style={{"textAlign": "center"}}>{this.props.statistics[1][HeaderFields[0]] / ConfigurationConstants.THROUGHPUT}</td>
                                <td  style={{"textAlign": "center"}}>{this.props.statistics[1][HeaderFields[1]]}</td>
                                </tbody>


                            </Table>

                        </CardBody>
                    </Form>

                </Card>
            </Col>
        );
    }
}
export default Statistics;

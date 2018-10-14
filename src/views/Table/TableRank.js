import React, { PureComponent } from 'react';
import {  Card, CardBody, CardHeader, Table } from 'reactstrap';
import { Redirect } from 'react-router';





class TableRank extends PureComponent{
    constructor(props) {

        super(props);
        this.createTable = this.createTable.bind(this);

    }


    createTable(field) {
        let table = [];

        for(let i = 0;i!==this.props.header.length;i++){
            table.push(
                (< td style={{"textAlign": "center"}} >{field[this.props.header[i]]}</td>)
            )
        }
        return table
    };

    render() {

        let tableHeader = this.props.header.map(attribute => {

            return (
                <th key={attribute} style={{"textAlign": "center"}}>{attribute}
                </th>
            );
        });


        let currentTableBody = this.props.fields.map((field,index)=>
            <tbody>

            < td >{index}</td>
            {this.createTable(field)}
            </tbody>

                );


        return (
            <div className="animated fadeIn">


                    <CardBody id="card-list" style={{display: 'block'}}>
                        <Table style={{tableLayout:"fixed"}} responsive striped size="sm">
                            <thead bgcolor="#ADD8E6">
                            <tr>
                                <th ><b>#Position</b></th>

                                {tableHeader}

                            </tr>
                            </thead>
                            {currentTableBody}
                            <tbody>
                            </tbody>
                        </Table>

                    </CardBody>

            </div>

        );
    }
}
export default TableRank;

import React, { PureComponent } from 'react';
import {  CardBody, Table } from 'reactstrap';
import { Redirect } from 'react-router';





class TableQuery extends PureComponent{
    constructor(props) {

        super(props);
        this.createTable = this.createTable.bind(this);

    }


    createTable(field) {
        let table = [];

        for(let i = 0;i!==this.props.header.length;i++){
            table.push(
                (< td style={{"textAlign": "center"}} >{field[this.props.headerFields[i]]}</td>)
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
        if(this.props.indexOfFirst !== -1)
            currentTableBody = currentTableBody.slice(this.props.indexOfFirst, this.props.indexOfLast);

        return (
            <div className="animated fadeIn">


                    <CardBody id="card-list" style={{display: 'block'}}>
                        <Table style={{tableLayout:"fixed"}} responsive striped size="sm">
                            <thead bgcolor="#ADD8E6">
                            <tr>
                                <th ><b>#</b></th>

                                {tableHeader}

                            </tr>
                            </thead>
                            {currentTableBody}
                        </Table>

                    </CardBody>

            </div>

        );
    }
}
export default TableQuery;

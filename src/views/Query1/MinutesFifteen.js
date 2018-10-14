import React, { PureComponent } from 'react';
import {
    Card,
    CardHeader,
    Col,
    Form,
} from 'reactstrap';
import TableQuery from '../Table/TableQuery';

const Header =
    ["id Intersection", "Mean Speed"];

const HeaderFields=["idIntersection", "meanSpeed"];

class MinutesFifteen extends PureComponent{

    constructor(props) {
        super(props);

        this.state = {
            hiddenBody: false,
        };

        this.hiddenBody = this.hiddenBody.bind(this);

    }



    hiddenBody(){
        this.setState({hiddenBody: !this.state.hiddenBody});
        if(this.state.hiddenBody)
            document.getElementById("card-body").style.display = "block";
        else
            document.getElementById("card-body").style.display = "none";
    }


    render(){

        return(
            <Col md="9">
                <Card>
                    <CardHeader> <i className="fa fa-align-justify" onClick={this.hiddenBody} style={{cursor:"pointer"}}/>
                        <strong>Medians 15 minutes</strong>
                    </CardHeader>
                    <Form id="card-body" style={{display: 'block'}}  encType="multipart/form-data" className="form-horizontal">

                        <TableQuery header={Header} indexOfFirst={-1} headerFields={HeaderFields} fields={this.props.mean15m["element"]} />
                    </Form>

                </Card>
            </Col>
        );
    }
}
export default MinutesFifteen;

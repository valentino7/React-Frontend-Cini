import React, { PureComponent } from 'react';
import {
    Card,
    CardHeader,
    Col,
    Form,
} from 'reactstrap';
import TableQuery from '../Table/TableQuery';
const Header =
    ["id Intersection", "Median"];

const HeaderFields=["idIntersection", "meanSpeed"];

class TwentyFourHour extends PureComponent{

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
                        <strong>Medians 24 hours</strong>
                    </CardHeader>

                    <Form id="card-body" style={{display: 'block'}}  encType="multipart/form-data" className="form-horizontal">

                        <TableQuery indexOfFirst={-1}  header={Header}  headerFields={HeaderFields} fields={this.props.mean24h["element"]} />
                    </Form>
                </Card>
            </Col>
        );
    }
}
export default TwentyFourHour;

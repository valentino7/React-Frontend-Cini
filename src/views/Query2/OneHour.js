import React, { PureComponent } from 'react';
import {
    Card,
    CardHeader,
    Col,
    Label,
    Input,
    Form,
} from 'reactstrap';
import TableQuery from '../Table/TableQuery';
import {RESULTS_PER_PAGE_TARGET_LIST} from "../../_constants/configurationConstants";
import CustomPagination from "../CustomPagination/CustomPagination";

const Header =
    ["id Intersection", "Median"];

const HeaderFields=["idIntersection", "meanSpeed"];

class OneHour extends PureComponent{

    constructor(props) {
        super(props);

        this.state = {
            hiddenBody: false,
            currentPage: 1
        };

        //this.createNotification = this.createNotification.bind(this);
        this.hiddenBody = this.hiddenBody.bind(this);
        this.selectPage= this.selectPage.bind(this);
        this.selectLastPage = this.selectLastPage.bind(this);
    }

    selectPage(page) {
        this.setState({
            currentPage: page
        });
    }

    selectLastPage() {
        this.setState({
            currentPage: Math.ceil(this.props.median1h.length / RESULTS_PER_PAGE_TARGET_LIST)
        });
    }

    hiddenBody(){
        this.setState({hiddenBody: !this.state.hiddenBody});
        if(this.state.hiddenBody)
            document.getElementById("card-body").style.display = "block";
        else
            document.getElementById("card-body").style.display = "none";
    }


    render(){
        const indexOfFirst = RESULTS_PER_PAGE_TARGET_LIST * (this.state.currentPage - 1);
        const indexOfLast = RESULTS_PER_PAGE_TARGET_LIST * (this.state.currentPage);
        return(
            <Col md="9">
                <Card>
                    <CardHeader> <i className="fa fa-align-justify" onClick={this.hiddenBody} style={{cursor:"pointer"}}/>
                        <strong>Medians 1 hour</strong>
                    </CardHeader>
                    <Form id="card-body" style={{display: 'block'}}  >
                    <br/>
                    <Form >
                        <Col>
                            <Label >GLOBAL MEDIAN</Label>
                            <Input type="number" value={this.props.median1h["globalMedian"]}  disabled="disabled"  />
                        </Col>
                    </Form>
                    <hr/>
                    <Form encType="multipart/form-data" className="form-horizontal">

                        <TableQuery indexOfFirst={indexOfFirst} indexOfLast={indexOfLast} header={Header}  headerFields={HeaderFields} fields={this.props.median1h["listMedian"]} />
                    </Form>
                    <div align="center">
                        <div style={{display:"inline-block"}}>
                            <CustomPagination numPages={Math.ceil(this.props.median1h["listMedian"].length / RESULTS_PER_PAGE_TARGET_LIST)} selectPage={this.selectPage} currentPage={this.state.currentPage}/>
                        </div>
                    </div>
                    </Form>
                </Card>
            </Col>
        );
    }
}
export default OneHour;

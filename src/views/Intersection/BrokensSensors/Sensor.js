import React, { Component } from 'react';
import {
    Button,

} from 'reactstrap';
class Sensor extends Component {
    constructor(props) {
        super(props);
        this.handleRepair = this.handleRepair.bind(this);
    }

    handleRepair() {
        this.props.onRepair(this.props.sensor);
    }

    render() {

        return(
            <React.Fragment>
                <tr>
                    <td width="30px"><b>{this.props.index + 1}</b>
                    </td>

                    <td align="center">
                        {this.props.sensor["idTrafficLight"]}
                    </td>

                    <td align="center">
                        {this.props.sensor["idIntersection"]}
                    </td>

                    <td align="center">
                        {this.props.sensor["stateTrafficLight"][0]}
                    </td>

                    <td align="center">
                        {this.props.sensor["stateTrafficLight"][1]}
                    </td>

                    <td align="center">
                        {this.props.sensor["stateTrafficLight"][2]}
                    </td>

                    <td align="center">
                        <Button size="md"  onClick={this.handleRepair}  color="danger" > Repair</Button>
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}
export default Sensor;

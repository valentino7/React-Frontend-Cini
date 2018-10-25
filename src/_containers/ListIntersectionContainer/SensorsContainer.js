import React from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {listIntersectionActions} from "../../_actions";
import BrokenSensors from "../../views/Intersection/BrokensSensors/BrokenSensors";
import {
    TIMEOUT_REQUEST_BROKEN_SENSORS
} from '../../_constants/configurationConstants';

class SensorsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            sensors: [],
        };

        /* Binding */

        this.getElements=this.getElements.bind(this);
    }

    componentWillUnmount() {

        clearInterval(this.interval);
    }

    getElements(){
        // if (!this.props.isValid ){
        this.setState({sensors:this.props.actions.getSensors()});
        // }
    }

    componentWillMount() {
        this.getElements();
        this.interval = setInterval(() => this.getElements(), TIMEOUT_REQUEST_BROKEN_SENSORS);

        //this.getElements();
    }


    render() {
        console.log("container"+this.props.sensors);
        return(
            <React.Fragment>
                {this.props.loading ? <div className="loading">Loading</div> : null}
                {
                    typeof(this.props.sensors) !== 'undefined'   ?
                        <BrokenSensors stateTrafficLight={this.props.sensors} getElement={this.getElements} />:
                        <div/>
                }
                }

            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        sensors: state.sensors.sensors,
        loading: state.sensors.loading,
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(listIntersectionActions, dispatch) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SensorsContainer);

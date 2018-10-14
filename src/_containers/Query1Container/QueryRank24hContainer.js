import React from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import { query1Actions } from "../../_actions";
import {
    TIMEOUT_REQUEST_QUERY
} from '../../_constants/configurationConstants';
import TwentyFourHour from "../../views/Query1/TwentyFourHour";


class QueryRank24hContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            elements: [],
        };

        /* Binding */

        this.getElements=this.getElements.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getElements(){
        // if (!this.props.isValid ){
        this.props.actions.getMeans24();
        // }
    }

    componentWillMount() {
        this.getElements();
        this.interval = setInterval(() => this.getElements(), TIMEOUT_REQUEST_QUERY);

        //this.getElements();
    }

    render() {
        return(
            <React.Fragment>
                {this.props.loading ? <div className="loading">Loading</div> : null}
                {
                     typeof(this.props.mean24h['element']) !== 'undefined' ? <TwentyFourHour mean24h={this.props.mean24h}  getElements={this.getElements}/>
                         : <div/>
                }

            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        mean24h: state.mean24h.mean24h,
        isValid: state.mean24h.isValid,
        loading: state.mean24h.loading,
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(query1Actions, dispatch) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QueryRank24hContainer);

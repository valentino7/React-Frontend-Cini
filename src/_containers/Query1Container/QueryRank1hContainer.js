import React from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import { query1Actions } from "../../_actions";
import {
    TIMEOUT_REQUEST_QUERY
} from '../../_constants/configurationConstants';
import OneHour from "../../views/Query1/OneHour";


class QueryRank1hContainer extends React.Component {
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
        this.props.actions.getMeans1();
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
                    typeof(this.props.mean1h["element"]) !== 'undefined'     ?   <OneHour mean1h={this.props.mean1h}  getElements={this.getElements}/>
                        : <div/>

                }

            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        mean1h: state.mean1h.mean1h,
        isValid: state.mean1h.isValid,
        loading: state.mean1h.loading,
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(query1Actions, dispatch) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QueryRank1hContainer);
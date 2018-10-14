import React from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import { query2Actions } from "../../_actions";
import {
    TIMEOUT_REQUEST_QUERY
} from '../../_constants/configurationConstants';
import OneHour from "../../views/Query2/OneHour";


class Query1hContainer extends React.Component {
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
        this.props.actions.getElements1();
        // }
    }

    componentWillMount() {
        this.getElements();
        this.interval = setInterval(() => this.getElements(), TIMEOUT_REQUEST_QUERY);

        //this.getElements();
    }

    render() {
        console.log(this.props.median1h );
        return(
            <React.Fragment>
                {this.props.loading ? <div className="loading">Loading</div> : null}
                {
                    typeof(this.props.median1h["listMedian"]) !== 'undefined' ? <OneHour median1h={this.props.median1h}  getElements={this.getElements}/>
                        : <div/>
                }

            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        median1h: state.median1h.median1h,
        isValid: state.median1h.isValid,
        loading: state.median1h.loading,
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(query2Actions, dispatch) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Query1hContainer);

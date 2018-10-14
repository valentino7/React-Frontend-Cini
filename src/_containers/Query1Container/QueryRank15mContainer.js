import React from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import { query1Actions } from "../../_actions";
import {
    TIMEOUT_REQUEST_QUERY
} from '../../_constants/configurationConstants';
import MinutesFifteen from "../../views/Query1/MinutesFifteen";


class QueryRank15mContainer extends React.Component {
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
        this.props.actions.getMeans15();
        // }
    }

    componentWillMount() {
        this.getElements();
        this.interval = setInterval(() => this.getElements(), TIMEOUT_REQUEST_QUERY);

    }

    render() {
        return(
            <React.Fragment>
                {this.props.loading ? <div className="loading">Loading</div> : null}
                {
                    typeof(this.props.mean15m['element']) !== 'undefined'  ? <MinutesFifteen mean15m={this.props.mean15m}  getElements={this.getElements}/>
                         : <div/>

                }

            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        mean15m: state.mean15m.mean15m,
        isValid: state.mean15m.isValid,
        loading: state.mean15m.loading,
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(query1Actions, dispatch) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QueryRank15mContainer);

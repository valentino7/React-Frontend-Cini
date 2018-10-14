import React from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import { query2Actions } from "../../_actions";
import {
    TIMEOUT_REQUEST_QUERY
} from '../../_constants/configurationConstants';
import TwentyFourHour from "../../views/Query2/TwentyFourHour";


class Query24hContainer extends React.Component {
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
        this.props.actions.getElements24();
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
                    typeof(this.props.median24h["listMedian"]) !== 'undefined'    ? <TwentyFourHour median24h={this.props.median24h}  getElements={this.getElements}/>
                        : <div/>
                }

            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        median24h: state.median24h.median24h,
        isValid: state.median24h.isValid,
        loading: state.median24h.loading,
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(query2Actions, dispatch) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Query24hContainer);

import React from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import { query2Actions } from "../../_actions";
import {
    TIMEOUT_REQUEST_QUERY
} from '../../_constants/configurationConstants';
import MinutesFifteen from "../../views/Query2/MinutesFifteen";


class Query15mContainer extends React.Component {
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
            this.props.actions.getElements15();
       // }
    }

    componentWillMount() {
        this.getElements();
        this.interval = setInterval(() => this.getElements(), TIMEOUT_REQUEST_QUERY);

        //this.getElements();
    }

    render() {
        console.log(this.props.elements);
        return(
            <React.Fragment>
                {this.props.loading ? <div className="loading">Loading</div> : null}
                {
                     typeof(this.props.elements["listMedian"]) !== 'undefined'   ? <MinutesFifteen elements={this.props.elements}  getElements={this.getElements}/>
                        : <div/>
                }

            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        elements: state.elements.elements,
        isValid: state.elements.isValid,
        loading: state.elements.loading,
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(query2Actions, dispatch) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Query15mContainer);

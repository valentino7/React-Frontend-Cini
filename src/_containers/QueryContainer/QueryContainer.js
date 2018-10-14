import React from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import { queryActions } from "../../_actions";

import Minutiquindici from "../../views/Query1/Minutiquindici";


class QueryContainer extends React.Component {
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
            this.props.actions.getElements();
       // }
    }


    componentWillMount() {
        this.interval = setInterval(() => this.getElements(), 7000);

        //this.getElements();
    }


    render() {
        console.log(this.props.elements);
        return(
            <React.Fragment>
                {this.props.loading ? <div className="loading">Loading</div> : null}
                { <Minutiquindici elements={this.props.elements}  />}

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
    return { actions: bindActionCreators(queryActions, dispatch) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QueryContainer);

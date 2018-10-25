import React from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {listIntersectionActions} from "../../_actions";
import {
    TIMEOUT_REQUEST_INTERSECTIONS
} from '../../_constants/configurationConstants';
import ListIntersection from "../../views/Intersection/ListIntersection";

class ListIntersectionContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            intersections: [],
        };

        /* Binding */

        this.getElements=this.getElements.bind(this);
    }

    componentWillUnmount() {

        clearInterval(this.interval);
    }

    getElements(){
        // if (!this.props.isValid ){
        this.props.actions.getIntersections();
        // }
    }

    componentWillMount() {
        this.getElements();
        this.interval = setInterval(() => this.getElements(), TIMEOUT_REQUEST_INTERSECTIONS);

        //this.getElements();
    }


    render() {
        return(
            <React.Fragment>
                {this.props.loading ? <div className="loading">Loading</div> : null}
                    {
                        typeof(this.props.intersections) !== 'undefined'   ?
                            <ListIntersection intersections={this.props.intersections} getElement={this.getElements} />:
                            <div/>
                    }
                }

            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        intersections: state.intersections.intersections,
        loading: state.intersections.loading,
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(listIntersectionActions, dispatch) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListIntersectionContainer);

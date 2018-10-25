import React from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {
    TIMEOUT_REQUEST_STATISTICS_QUERY1
} from '../../_constants/configurationConstants';
import {statisticsActions} from "../../_actions/statisticsActions";
import Statistics from "../../views/Statistics/Statistics";

class StatisticsContainerQuery1 extends React.Component {
    constructor(props) {
        super(props);

        /* Binding */

        this.getElements=this.getElements.bind(this);
    }

    componentWillUnmount() {

        clearInterval(this.interval);
    }

    getElements(){
        // if (!this.props.isValid ){
        this.props.actions.getStatistics();
        // }
    }

    componentWillMount() {
        this.getElements();
        this.interval = setInterval(() => this.getElements(), TIMEOUT_REQUEST_STATISTICS_QUERY1);

        //this.getElements();
    }


    render() {
        //console.log(this.props.statistics);
        return(
            <React.Fragment>
                {this.props.loading ? <div className="loading">Loading</div> : null}
                {
                    typeof(this.props.statistics[0]) !== 'undefined'   ?
                        <Statistics statistics={this.props.statistics} />:
                        <div/>
                }
                }

            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        statistics: state.statistics.statistics,
        loading: state.statistics.loading,
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(statisticsActions, dispatch) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatisticsContainerQuery1);

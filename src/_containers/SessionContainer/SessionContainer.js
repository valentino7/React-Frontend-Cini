import React from 'react';
import { connect } from 'react-redux';
import {DefaultLayout} from "../../containers";
import { PublicRoute} from "../../_components";
import { HashRouter, Switch } from 'react-router-dom';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../../scss/style.css'

import { DEBUG_SESSIONCONTAINER_LIFECYCLE } from "../../_constants/debugConstants";

//import {configFileActions} from "../../_actions";

class SessionContainer extends React.Component {
  constructor(props) {
    super(props);


  }



  componentWillUnmount() {
    if (DEBUG_SESSIONCONTAINER_LIFECYCLE)
      alert("SessionContainer: will unmount");
  }

  render() {

    return(
      <React.Fragment>
      <HashRouter>
        <Switch>

          <PublicRoute path="/"
                        name="Home"
                        component={DefaultLayout}
                        logout={this.logout}
          />
        </Switch>
      </HashRouter>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

/*function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
    configFileActions: bindActionCreators(configFileActions, dispatch)
  };
}
*/
export default connect(mapStateToProps)(SessionContainer);

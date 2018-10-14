import { combineReducers } from 'redux';

import { authentication } from './authenticationReducer';
import { users } from './usersReducer';
import { tickets } from './ticketsReducer';
import { alert } from './alertReducer';
import {teams } from './teamReducer';
import { loading } from './loadingReducer';
import { elements } from './query15mReducer';
import {median1h} from './query1hReducer';
import {median24h} from './query24hReducer';
import {mean15m} from './queryRank15mReducer';
import {mean24h} from './queryRank24hReducer';
import {mean1h} from './queryRank1hReducer';
import { sensors } from './listIntersectionReducer';

//import { configFile } from "./configFileReducer";

const rootReducer = combineReducers({

    authentication,
    users,
    tickets,
    sensors,
    alert,
    elements,
    median24h,
    median1h,
    mean15m,
    mean1h,
    mean24h,
    teams,
    loading,
 // configFile
});

export default rootReducer;

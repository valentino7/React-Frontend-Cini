import { combineReducers } from 'redux';

import { alert } from './alertReducer';
import { loading } from './loadingReducer';
import { elements } from './query15mReducer';
import {median1h} from './query1hReducer';
import {median24h} from './query24hReducer';
import {mean15m} from './queryRank15mReducer';
import {mean24h} from './queryRank24hReducer';
import {mean1h} from './queryRank1hReducer';
import { sensors } from './listSensorsReducer';
import { statistics } from './statisticsQuery1Reducer';
import { intersections } from './listIntersectionsReducer';


const rootReducer = combineReducers({


    sensors,
    alert,
    elements,
    median24h,
    median1h,
    intersections,
    mean15m,
    statistics,
    mean1h,
    mean24h,
    loading,
});

export default rootReducer;


import {statisticsConstants} from '../_constants';

export function statistics(state = {statistics: []}, action) {
    switch (action.type) {
        case statisticsConstants.CREATE_REQUEST_TOP1:
            return {
                ...state,
                loading: true
            };
        case statisticsConstants.CREATE_FAILURE_TOP1:

            return {
                ...state,
                loading: false,
                error: action.error,
            };

        case statisticsConstants.CREATE_SUCCESS_TOP1:
            console.log(action.statistics[1]);

            return {
                ...state,
                loading: false,
                statistics: action.statistics,
            };

        default:
            return state
    }
}

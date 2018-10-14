import { query1Constants } from '../_constants';

export function mean15m(state = { isValid: false ,mean15m: []}, action) {
    switch (action.type) {
        case query1Constants.GETELEMENTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case query1Constants.GETELEMENTS_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.error,
                isValid: false
            };

        case query1Constants.INVALIDATE_QUERY_CACHE:

            return {
                ...state,
                isValid: false
            };


        case query1Constants.GETELEMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                mean15m: action.mean15m,
                isValid: true
            };

        default:
            return state
    }
}

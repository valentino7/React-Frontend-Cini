import { query1Constants } from '../_constants';

export function mean1h(state = { isValid: false ,mean1h: []}, action) {
    switch (action.type) {
        case query1Constants.GETELEMENTS1h_REQUEST:
            return {
                ...state,
                loading: true
            };
        case query1Constants.GETELEMENTS1h_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.error,
                isValid: false
            };


        case query1Constants.GETELEMENTS1h_SUCCESS:
            return {
                ...state,
                loading: false,
                mean1h: action.mean1h,
                isValid: true
            };

        default:
            return state
    }
}

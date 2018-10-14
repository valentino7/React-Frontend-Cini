import { query1Constants } from '../_constants';

export function mean24h(state = { isValid: false ,mean24h: []}, action) {
    switch (action.type) {
        case query1Constants.GETELEMENTS24h_REQUEST:
            return {
                ...state,
                loading: true
            };
        case query1Constants.GETELEMENTS_FAILURE24h:

            return {
                ...state,
                loading: false,
                error: action.error,
                isValid: false
            };

        case query1Constants.GETELEMENTS24h_SUCCESS:
            return {
                ...state,
                loading: false,
                mean24h: action.mean24h,
                isValid: true
            };

        default:
            return state
    }
}

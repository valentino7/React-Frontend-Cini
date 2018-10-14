import { query2Constants } from '../_constants';

export function median24h(state = { isValid: false ,median24h: []}, action) {
    switch (action.type) {
        case query2Constants.GETELEMENTS24h_REQUEST:
            return {
                ...state,
                loading: true
            };
        case query2Constants.GETELEMENTS_FAILURE24h:

            return {
                ...state,
                loading: false,
                error: action.error,
                isValid: false
            };

        case query2Constants.GETELEMENTS24h_SUCCESS:
            return {
                ...state,
                loading: false,
                median24h: action.median24h,
                isValid: true
            };

        default:
            return state
    }
}

import { query2Constants } from '../_constants';

export function median1h(state = { isValid: false ,median1h: []}, action) {
    switch (action.type) {
        case query2Constants.GETELEMENTS1h_REQUEST:
            return {
                ...state,
                loading: true
            };
        case query2Constants.GETELEMENTS1h_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.error,
                isValid: false
            };


        case query2Constants.GETELEMENTS1h_SUCCESS:
            return {
                ...state,
                loading: false,
                median1h: action.median1h,
                isValid: true
            };

        default:
            return state
    }
}

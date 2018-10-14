import { query2Constants } from '../_constants';

export function elements(state = { isValid: false ,elements: []}, action) {
    switch (action.type) {
      case query2Constants.GETELEMENTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case query2Constants.GETELEMENTS_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.error,
                isValid: false
            };

        case query2Constants.INVALIDATE_QUERY_CACHE:

            return {
                ...state,
                isValid: false
            };


        case query2Constants.GETELEMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                elements: action.elements,
                isValid: true
            };

        default:
            return state
    }
}

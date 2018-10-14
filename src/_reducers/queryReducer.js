import { queryConstants } from '../_constants';

export function elements(state = { isValid: false ,elements: []}, action) {
    switch (action.type) {
      case queryConstants.GETELEMENTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case queryConstants.GETELEMENTS_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.error,
                isValid: false
            };

        case queryConstants.INVALIDATE_QUERY_CACHE:

            return {
                ...state,
                isValid: false
            };


        case queryConstants.GETELEMENTS_SUCCESS:
            console.log(action.elements);
            alert("reducer");

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

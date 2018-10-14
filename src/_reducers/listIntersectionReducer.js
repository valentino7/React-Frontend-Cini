import { listIntersectionCostant } from '../_constants';

export function sensors(state = { isValid: false ,sensors: []}, action) {
    switch (action.type) {
        case listIntersectionCostant.GETSENSORS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case listIntersectionCostant.GETSENSORS_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.error,
                isValid: false
            };

        case listIntersectionCostant.INVALIDATE_INTERSECTION_CACHE:

            return {
                ...state,
                isValid: false
            };


        case listIntersectionCostant.GETSENSORS_SUCCESS:
            console.log("reducer"+action.sensors);
            return {
                ...state,
                loading: false,
                sensors: action.sensors,
                isValid: true
            };

        default:
            return state
    }
}

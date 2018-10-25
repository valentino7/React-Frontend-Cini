import { listIntersectionConstant } from '../_constants';

export function sensors(state = { sensors: []}, action) {
    switch (action.type) {
        case listIntersectionConstant.GETSENSORS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case listIntersectionConstant.GETSENSORS_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.error,
            };



        case listIntersectionConstant.GETSENSORS_SUCCESS:
            console.log("reducer"+action.sensors);
            return {
                ...state,
                loading: false,
                sensors: action.sensors,
            };

        default:
            return state
    }
}

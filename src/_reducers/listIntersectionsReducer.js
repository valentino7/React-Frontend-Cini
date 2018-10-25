
import { listIntersectionConstant } from '../_constants';

export function intersections(state = {intersections: []}, action) {
    switch (action.type) {
        case listIntersectionConstant.GETINTERSECTIONS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case listIntersectionConstant.GETINTERSECTIONS_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.error,
            };

        case listIntersectionConstant.GETINTERSECTIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                intersections: action.intersections,
            };

        default:
            return state
    }
}

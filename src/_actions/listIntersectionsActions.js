import { listIntersectionCostant } from '../_constants';
import { alertActions } from './';
import {listIntersectionService} from '../_services';

export const listIntersectionActions = {
    getSensors
};

function invalidateQueryCache(dispatch) {
    dispatch(invalidateCache());

    function invalidateCache() { return { type: listIntersectionCostant.INVALIDATE_INTERSECTION_CACHE } }
}

function getSensors() {

    return dispatch => {
        dispatch(request());


        listIntersectionService.getSensors()
            .then(

                sensors=>{
        dispatch(success(sensors));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: listIntersectionCostant.GETSENSORS_REQUEST } }
    function success(sensors) { return { type: listIntersectionCostant.GETSENSORS_SUCCESS, sensors } }
    function failure(error) { return { type: listIntersectionCostant.GETSENSORS_FAILURE, error } }
}

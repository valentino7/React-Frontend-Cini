import { listIntersectionConstant } from '../_constants';
import { alertActions } from './';
import {listIntersectionService} from '../_services';

export const listIntersectionActions = {
    getSensors,getIntersections,
};



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

    function request() { return { type: listIntersectionConstant.GETSENSORS_REQUEST } }
    function success(sensors) { return { type: listIntersectionConstant.GETSENSORS_SUCCESS, sensors } }
    function failure(error) { return { type: listIntersectionConstant.GETSENSORS_FAILURE, error } }
}

function getIntersections() {

    return dispatch => {
        dispatch(request());


        listIntersectionService.getIntersections()
            .then(

                intersections=>{
                    dispatch(success(intersections));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: listIntersectionConstant.GETINTERSECTIONS_REQUEST } }
    function success(intersections) { return { type: listIntersectionConstant.GETINTERSECTIONS_SUCCESS, intersections } }
    function failure(error) { return { type: listIntersectionConstant.GETINTERSECTIONS_FAILURE, error } }
}

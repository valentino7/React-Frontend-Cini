import { query1Constants } from '../_constants';
import { query1Service } from '../_services';
import { alertActions } from './';

export const query1Actions = {
    getMeans15,getMeans1,getMeans24
};

function getMeans15() {

    return dispatch => {
        dispatch(request());
        query1Service.getElements(0)
            .then(

                mean15m=>{
                    dispatch(success(mean15m));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };




    function request() { return { type: query1Constants.GETELEMENTS_REQUEST } }
    function success(mean15m) { return { type: query1Constants.GETELEMENTS_SUCCESS, mean15m } }
    function failure(error) { return { type: query1Constants.GETELEMENTS_FAILURE, error } }
}

function getMeans1() {

    return dispatch => {
        dispatch(request1());
        query1Service.getElements(1)
            .then(
                mean1h => {
                    dispatch(success1(mean1h));
                },
                error => {
                    dispatch(failure1(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request1() { return { type: query1Constants.GETELEMENTS1h_REQUEST } }
    function success1(mean1h) { return { type: query1Constants.GETELEMENTS1h_SUCCESS, mean1h } }
    function failure1(error) { return { type: query1Constants.GETELEMENTS1h_FAILURE, error } }

}

function getMeans24() {

    return dispatch => {
        dispatch(request24());
        query1Service.getElements(2)
            .then(
                mean24h => {
                    dispatch(success24(mean24h));
                },
                error => {
                    dispatch(failure24(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request24() { return { type: query1Constants.GETELEMENTS24h_REQUEST } }
    function success24(mean24h) { return { type: query1Constants.GETELEMENTS24h_SUCCESS, mean24h } }
    function failure24(error) { return { type: query1Constants.GETELEMENTS_FAILURE24h, error } }
}
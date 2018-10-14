import { query2Constants } from '../_constants';
import { query2Service } from '../_services';
import { alertActions } from './';

export const query2Actions = {
    getElements15,getElements1,getElements24
};

function invalidateQueryCache(dispatch) {
    dispatch(invalidateCache());

    function invalidateCache() { return { type: query2Constants.INVALIDATE_QUERY_CACHE } }
}

function getElements15() {

    return dispatch => {
       dispatch(request());
       query2Service.getElements(0)
           .then(

               elements=>{
                   dispatch(success(elements));
               },
               error => {
                   dispatch(failure(error));
                   dispatch(alertActions.error(error));
               }
           );
    };




    function request() { return { type: query2Constants.GETELEMENTS_REQUEST } }
    function success(elements) { return { type: query2Constants.GETELEMENTS_SUCCESS, elements } }
    function failure(error) { return { type: query2Constants.GETELEMENTS_FAILURE, error } }
}

function getElements1() {

    return dispatch => {
        dispatch(request1());
        query2Service.getElements(1)
            .then(
                median1h => {
                    dispatch(success1(median1h));
                },
                error => {
                    dispatch(failure1(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request1() { return { type: query2Constants.GETELEMENTS1h_REQUEST } }
    function success1(median1h) { return { type: query2Constants.GETELEMENTS1h_SUCCESS, median1h } }
    function failure1(error) { return { type: query2Constants.GETELEMENTS1h_FAILURE, error } }

}

function getElements24() {

    return dispatch => {
        dispatch(request24());
        query2Service.getElements(2)
            .then(
                median24h => {
                    dispatch(success24(median24h));
                },
                error => {
                    dispatch(failure24(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request24() { return { type: query2Constants.GETELEMENTS24h_REQUEST } }
    function success24(median24h) { return { type: query2Constants.GETELEMENTS24h_SUCCESS, median24h } }
    function failure24(error) { return { type: query2Constants.GETELEMENTS_FAILURE24h, error } }
}
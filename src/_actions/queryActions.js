import { queryConstants } from '../_constants';
import { queryService } from '../_services';
import { alertActions } from './';
import {CACHE_VALIDITY_QUERY} from "../_constants/configurationConstants";

export const queryActions = {
    getElements
};

const elements= [
    {
        "Speed": "22",
        "Time": "33",

    },
    {
        "Speed": "22",
        "Time": "23",

    }
];

function invalidateQueryCache(dispatch) {
    dispatch(invalidateCache());

    function invalidateCache() { return { type: queryConstants.INVALIDATE_QUERY_CACHE } }
}

function getElements() {

    return dispatch => {
       dispatch(request());
        //queryService.getElements()
        //.then(
                    dispatch(success(elements));
                    //setTimeout(invalidateQueryCache.bind(null, dispatch), CACHE_VALIDITY_QUERY);
           // );
    };

   function request() { return { type: queryConstants.GETELEMENTS_REQUEST } }
    function success(elements) { return { type: queryConstants.GETELEMENTS_SUCCESS, elements } }
   // function failure(error) { return { type: queryConstants.GETELEMENTS_FAILURE, error } }
}

/* CACHE */
export const CACHE_VALIDITY_QUERY = 6000; // cache validity expressed in milliseconds


/* PAGINATION */
export const TIMEOUT_REQUEST_BROKEN_SENSORS = 10000; //10 SEC
export const RESULTS_PER_PAGE_TARGET_LIST = 10;
export const TIMEOUT_REQUEST_QUERY = 10000; //10 sec
export const RESULTS_PER_PAGE_STOPWORDS_LIST = 10;

/* URLs */

export const  URL_CREATE_INTERSECTION= 'http://localhost:8081/sdcc/intersection/create';
export const  URL_UPDATE_INTERSECTION= 'http://localhost:8081/sdcc/intersection/update';
export const URL_GET_ALL_INTERSECTION= 'http://localhost:8081/sdcc/intersection/findAll';
export const URL_GET_ALL_SENSOR_BROKEN= 'http://localhost:8081/sdcc/state/findAllBroken';
export const URL_REPAIR_SENSOR= 'http://localhost:8081/sdcc/state/repair';
export const URL_DELETE_INTERSECTION= 'http://localhost:8081/sdcc/intersection/deleteById/';
export const URL_GET_MEDIANS_QUERY2= 'http://localhost:8081/sdcc/Median/findAll/';
export const URL_GET_MEANS_QUERY1= 'http://localhost:8081/sdcc/Rank/findAll/';




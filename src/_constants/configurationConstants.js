/* CACHE */
export const CACHE_VALIDITY_USER_LIST = 60000; // cache validity expressed in milliseconds
export const CACHE_VALIDITY_TICKET_LIST = 60000; // cache validity expressed in milliseconds
export const CACHE_VALIDITY_CONFIGFILE = 3600000; // cache validity expressed in milliseconds
export const CACHE_VALIDITY_TEAM_LIST = 60000; // cache validity expressed in milliseconds
export const CACHE_VALIDITY_QUERY = 6000; // cache validity expressed in milliseconds


/* PAGINATION */
export const RESULTS_PER_PAGE_TICKETLIST = 10;
export const RESULTS_PER_PAGE_USERLIST = 10;
export const TIMEOUT_REQUEST_BROKEN_SENSORS = 10000; //10 SEC
export const RESULTS_PER_PAGE_TARGET_LIST = 10;
export const TIMEOUT_REQUEST_QUERY = 10000; //10 sec
export const RESULTS_PER_PAGE_STOPWORDS_LIST = 10;

/* URLs */
export const URL_LOGIN = 'http://35.239.133.8:8081/ticketingsystem/users/authenticate';
export const URL_TARGET = 'http://35.239.133.8:8081/ticketingsystem/target/';
export const URL_GET_LINKS_STATISTICS = 'http://35.239.133.8:8081/ticketingsystem/clustering/getStatisticAndLinkByTarget/';
export const URL_EDIT_PROFILE = 'http://35.239.133.8:8081/ticketingsystem/users/';
export const URL_GET_ALL_USERS = 'http://35.239.133.8:8081/ticketingsystem/users';
export const URL_GET_ALL_TICKETS = 'http://35.239.133.8:8081/ticketingsystem/ticket';
export const URL_GET_TARGET_TICKETS = 'http://35.239.133.8:8081/ticketingsystem/ticket/search/targetPage/';
export const URL_GET_CATEGORY_TICKETS = 'http://35.239.133.8:8081/ticketingsystem/ticket/findByCategoryAndTarget/';
export const URL_REGISTER = 'http://35.239.133.8:8081/ticketingsystem/users';
export const URL_UPDATE_USER = 'http://35.239.133.8:8081/ticketingsystem/users/';
export const URL_DELETE_USER = 'http://35.239.133.8:8081/ticketingsystem/users/';
export const URL_GET_ALL_TEAMS = 'http://35.239.133.8:8081/ticketingsystem/teams/';
export const URL_GET_ALL_TEAMS_W_SURNAME = 'http://35.239.133.8:8081/ticketingsystem/teams/w_team_leader_surname';
export const URL_GET_CONFIGFILE = 'http://35.239.133.8:8081/ticketingsystem/system/configuration/getConfigurationFile';
export const URL_CLUSTERING = 'http://35.239.133.8:8081/ticketingsystem/clustering/elaborateCluster/';
export const URL_PREPARATION =  'http://35.239.133.8:8081/ticketingsystem/clustering/prepareDataset/';
export const URL_TOTALPAGES_TICKETS = 'http://35.239.133.8:8081/ticketingsystem/ticket/pageNumber/';
export const URL_TOTALPAGES_TICKETS_TARGET = 'http://35.239.133.8:8081/ticketingsystem/ticket/pageTargetNumber/';
export const URL_TOTALPAGES_TICKETS_CATEGORY = 'http://35.239.133.8:8081/ticketingsystem/ticket/pageTargetAndCategoryNumber/';

export const URL_GET_STOPWORDS_BY_TARGET = "http://35.239.133.8:8081/ticketingsystem/stopwords/findStopwordsByTarget/";
export const URL_DELETE_STOPWORD = "http://35.239.133.8:8081/ticketingsystem/stopwords/deleteStopwordByValueAndTarget";
export const URL_CREATE_STOPWORD = "http://35.239.133.8:8081/ticketingsystem/stopwords/createStopword/";
export const URL_GET_ADDS_FIELDS = "http://35.239.133.8:8081/ticketingsystem/system/configuration/getTicketTypology";
export const URL_GET_DEFAULT_FIELDS="http://35.239.133.8:8081/ticketingsystem/system/configuration/getTicketAdditionalFields";
export const URL_CREATE_TICKET='http://35.239.133.8:8081/ticketingsystem/ticket';

export const  URL_CREATE_INTERSECTION= 'http://localhost:8081/sdcc/intersection/create';
export const  URL_UPDATE_INTERSECTION= 'http://localhost:8081/sdcc/intersection/update';
export const URL_GET_ALL_INTERSECTION= 'http://localhost:8081/sdcc/intersection/findAll';
export const URL_GET_ALL_SENSOR_BROKEN= 'http://localhost:8081/sdcc/state/findAllBroken';
export const URL_REPAIR_SENSOR= 'http://localhost:8081/sdcc/state/repair';
export const URL_DELETE_INTERSECTION= 'http://localhost:8081/sdcc/intersection/deleteById/';
export const URL_GET_MEDIANS_QUERY2= 'http://localhost:8081/sdcc/Median/findAll/';
export const URL_GET_MEANS_QUERY1= 'http://localhost:8081/sdcc/Rank/findAll/';



export const URL_GET_CLUSTER = '...';

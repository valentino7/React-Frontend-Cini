import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div className="loading">Loading&#8230;</div>
  //return <div>Loading...</div>;
}



const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});


const CreateIntersection = Loadable({
  loader: () => import('./views/Intersection/ControlCreateIntersection'),
  loading: Loading,
});

const Intersection = Loadable({
  loader: () => import('./views/Intersection/ListIntersection/ListIntersection'),
  loading: Loading,
});

const Sensors = Loadable({
    loader: () => import('./_containers/ListIntersectionContainer/ListIntersectionContainer'),
    loading: Loading,
});

const Query2FifteenM = Loadable({
    loader: () => import('./_containers/Query2Container/Query15mContainer'),
    loading: Loading,
});

const Query2OneH = Loadable({
    loader: () => import('./_containers/Query2Container/Query1hContainer'),
    loading: Loading,
});

const Query2TwentyFourH = Loadable({
    loader: () => import('./_containers/Query2Container/Query24hContainer'),
    loading: Loading,
});

const QueryRank15m = Loadable({
    loader: () => import('./_containers/Query1Container/QueryRank15mContainer'),
    loading: Loading,
});

const QueryRank1h = Loadable({
    loader: () => import('./_containers/Query1Container/QueryRank1hContainer'),
    loading: Loading,
});

const QueryRank24h = Loadable({
    loader: () => import('./_containers/Query1Container/QueryRank24hContainer'),
    loading: Loading,
});


const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/intersection/CreateIntersection', name: 'Create target', component: CreateIntersection },
  { path: '/intersection/ListIntersectionContainer', ecxactname: 'Broken sensors', component: Sensors },
  { path: '/intersection/ListIntersection', ecxactname: 'Show intersections', component: Intersection },

  { path: '/Query2Container/QueryContainer15m', ecxactname: '15 minutes', component: Query2FifteenM },
  { path: '/Query2Container/QueryContainer1h', ecxactname: '1 hour', component: Query2OneH },
  { path: '/Query2Container/QueryContainer24h', ecxactname: '24 hour', component: Query2TwentyFourH },
  { path: '/Query1Container/QueryRank15mContainer', ecxactname: '15 minutes', component: QueryRank15m },
  { path: '/Query1Container/QueryRank1hContainer', ecxactname: '1 hour', component: QueryRank1h },
  { path: '/Query1Container/QueryRank24hContainer', ecxactname: '24 hour', component: QueryRank24h },

];

export default routes;

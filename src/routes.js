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
  loader: () => import('./views/Intersection/ListIntersection'),
  loading: Loading,
});

const Query1 = Loadable({
    loader: () => import('./_containers/QueryContainer/QueryContainer'),
    loading: Loading,
});


const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/intersection/CreateIntersection', name: 'Create target', component: CreateIntersection },
  { path: '/intersection/ListIntersection', ecxactname: 'Show intersections', component: Intersection },
    { path: '/QueryContainer/QueryContainer', ecxactname: 'Query1', component: Query1 },

];

export default routes;

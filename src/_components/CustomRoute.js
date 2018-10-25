import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Component, path, name, ...rest }) => (
    <Route {...path} {...name} render={props => (
        <Component {...props} {...rest} />
    )} />
);



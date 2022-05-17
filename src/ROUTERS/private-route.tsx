import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkUserSession } from '../SERVICES/user-service';

export const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route
        {...rest}
        render={(props: any) =>
            checkUserSession() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: '/login', state: { from: props.location } }}
                />
            )
        }
    />
);

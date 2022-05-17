import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkUserSession } from '../SERVICES/user-service';
import { useDispatch, useSelector } from 'react-redux';
export const CheckPrivateRoute = ({ component: Component, ...rest }: any) => {
  const redux = useSelector((state: any) => state.redux);

  return (
    <Route
      {...rest}
      render={(props: any) =>
        checkUserSession() ? (
          <Redirect
            to={{
              pathname: redux.app.homepage,
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

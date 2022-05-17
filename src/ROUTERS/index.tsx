import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainWrapper from '../CONTAINERS/layouts/index-wrapper';

import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

// import { PrivateRoute } from './private-route';
// import { CheckPrivateRoute } from './check-private-route';

const HomePage = lazy(() => import('../PAGES/home/index'));
const NotFoundPage = lazy(() => import('../PAGES/404/index'));

function MainRouter() {
  return (
    <MainWrapper>
      <Suspense
        fallback={
          <div className='loading-wrapper i-x-center i-y-center column-direction'>
            <div style={{ width: '10%' }}>
              <LinearProgress />
            </div>
          </div>
        }
      >
        <Switch>
          {/* <CheckPrivateRoute exact path='/' component={PortalWelcome} /> */}

          {/* <Route exact path='/cart' component={Cart} /> */}
          <Route exact path='/portfolio' component={HomePage} />

           {/* <PrivateRoute
            exact
            path='/dummy/questions/:view_id?'
            component={Dummy_Question}
          /> */}
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </MainWrapper>
  );
}

export default MainRouter;

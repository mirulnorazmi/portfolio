import React from 'react';
import MainRouter from '../ROUTERS/index';

import Theme from './App-theme';
import MomentUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
function App(props: any) {
  return (
    <Theme>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <MainRouter />
      </MuiPickersUtilsProvider>
    </Theme>
  );
}

export default App;

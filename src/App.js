
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './GlobalStyles';
import theme from './theme';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import DashboardLayout from './layouts/DashboardLayout/index';
import {Route, Switch} from 'react-router-dom'
import Dashboard from './containers/Dashboard/Dashboard'

const App = () => {
 // const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* {routing} */}
       <DashboardLayout>
       <Switch>
          
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </DashboardLayout>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default App;

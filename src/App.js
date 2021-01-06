
import React, {useState, useEffect} from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './GlobalStyles';
import theme from './theme';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import DashboardLayout from './layouts/DashboardLayout/index';
import {Route, Switch} from 'react-router-dom'
import Dashboard from './containers/Dashboard/Dashboard'
import Settings from './containers/Settings/Settings'
import { BILLING_HOSTNAME, BILLING_PORT, PROTOCOL, BILLING_PATHNAME, BASE_BILLING_ADRESS } from "./service/config";

function App() {
  // const routing = useRoutes(routes);
 // const initialState = () => {window.localStorage.getItem("BILLING_HOSTNAME"), BILLING_HOSTNAME)};
  //const [hostName, setHostName] = useState(initialState);


  useEffect(() => window.localStorage.setItem("BILLING_ADRESS", BASE_BILLING_ADRESS), );
 
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>

        <DashboardLayout>
          <Switch>

            <Route path="/dashboard" component={Dashboard} />
            <Route path="/settings" component={Settings} />
            <Route path="/" component={Dashboard} />

          </Switch>
        </DashboardLayout>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;

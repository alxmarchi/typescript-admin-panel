
import React, {useEffect} from 'react';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './GlobalStyles';
import theme from './theme';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import DashboardLayout from './layouts/DashboardLayout/index';
import {Route, Switch} from 'react-router-dom'
import Dashboard from './containers/Dashboard/Dashboard'
import Settings from './containers/Settings/Settings'
import { BASE_BILLING_ADRESS, BASE_HANDBOOK_ADRESS } from "./service/config";

function App() {
  // const routing = useRoutes(routes);
 // const initialState = () => {window.localStorage.getItem("BILLING_HOSTNAME"), BILLING_HOSTNAME)};
  //const [hostName, setHostName] = useState(initialState);


  useEffect(() => {
    window.sessionStorage.setItem("BILLING_ADRESS", BASE_BILLING_ADRESS);
    sessionStorage.setItem('HANDBOOK_ADRESS', BASE_HANDBOOK_ADRESS);
  }, []);
 
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

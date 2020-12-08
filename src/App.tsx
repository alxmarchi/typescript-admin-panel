import React, { useState, useEffect } from 'react';
import './App.css';
import { ReportSearchForm } from './components/form/ReportSearchForm';
import {Chart} from  './components/chart/Chart';
import { RequestValuesType } from './models/objects/RequestValues';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {fetchData, getMisTypes, getIntervals} from "./utils/ApiCalls";
import theme from './theme';
import {
  Container,
  Box,
  makeStyles,
  Paper,
  ThemeProvider
} from '@material-ui/core';

import {RequestTypeResult} from "./models/objects/RequestTypeResult";
import { processingData } from './utils/Processing';
import GlobalStyles from './GlobalStyles';
import { AppHeader } from './components/header/Header';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 400,
  },
}));

const data = null
function App() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
const [misTypes, setMisTypes] = useState<RequestTypeResult[]>([{id:"", displayName: "",}])
const [interval, setInterval] = useState<RequestTypeResult[]>([{id:"", displayName: "",}])  

 
useEffect(() => {
  getIntervals().then((resolve)=>{
    const interval = resolve;
    setInterval(interval.data);
  })
  .catch((error)=>{console.log(error)});
 getMisTypes()
 .then((resolve)=>{
   const misTypes = resolve.data;
   setMisTypes(misTypes)})
   .catch((error)=>{console.log(error)});;
 setIsLoading(false);
}, []);

  const onResponceParamteresChanged = async (values : RequestValuesType) => {
    let {target} = values;
 console.log(target)

  alert(JSON.stringify(values, null, 2));
 const data = await fetchData(values);
 console.log(data)
 processingData(data, target);
  };

  return (
    <div className="app-wrap">
          <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
     <AppHeader />  
    <h1>Billing Report</h1>
      {isLoading ?
        <div>loading...</div> :
    <Box
    className={classes.root}
    title="Dashboard"
  >

   
<GlobalStyles />
      <Container maxWidth={false} >
      <Container maxWidth="lg" className={classes.container} >
      <Paper className={classes.paper}>
      <ReportSearchForm 
      misTypes = {misTypes}
      interval = {interval}
      onSubmitForm={onResponceParamteresChanged}
      />
      </Paper>
      </Container>  
      <Paper className={classes.paper}>
    <Chart data = {data}/> 
    </Paper>
      </Container>

    </Box>
      }
      </MuiPickersUtilsProvider>
    </ThemeProvider>    
      </div>
  );
}

export default App;

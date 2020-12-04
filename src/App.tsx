import React, { useState, useEffect } from 'react';
import './App.css';
import { ReportSearchForm } from './components/form/ReportSearchForm';
import {Chart} from  './components/chart/Chart';
import { RequestValuesType } from './models/objects/RequestValues';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {fetchData, getMisTypes, getIntervals} from "./utils/ApiCalls";
import {
  Container,
  Box,
  makeStyles,
  Grid,
  Paper
} from '@material-ui/core';

import {RequestTypeResult} from "./models/objects/RequestTypeResult";
import { resolve } from 'dns';



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
const [dataFrom, setDataFrom] = useState<string>('pip');
 
  useEffect(() => {
    getIntervals().then((resolve)=>{
      const interval = resolve.data;
      setInterval(interval);
    });
   getMisTypes()
   .then((resolve)=>{
     const misTypes = resolve.data;
     setMisTypes(misTypes)});
   setIsLoading(false);
  }, []);

  const onResponceParamteresChanged = async (values : RequestValuesType) => {
    let {from} = values;
    setDataFrom(from)
  console.log(from);
  console.log(dataFrom);

  alert(JSON.stringify(values, null, 2));
 const data = await fetchData(values);
 console.log(data)
  };

  return (
    <div className="app-wrap">
    <h1>Billing Report</h1>
      {isLoading ?
        <div>loading...</div> :
    <Box
    className={classes.root}
    title="Dashboard"
  >
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Container maxWidth={false} >
      <Container maxWidth="lg" className={classes.container} >
      <ReportSearchForm 
      misTypes = {misTypes}
      interval = {interval}
      onSubmitForm={onResponceParamteresChanged}
      />
      </Container>  
    <Chart data = {data}/> 
      </Container>
    </MuiPickersUtilsProvider>
    </Box>
      }
      </div>
  );
}

export default App;

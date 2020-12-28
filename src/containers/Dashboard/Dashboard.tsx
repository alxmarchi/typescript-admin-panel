import React, { useState, useEffect } from 'react';

import {
  Container,
  Box,
  makeStyles,
  Paper,
  Grid
} from '@material-ui/core';
import { RequestTypeResult } from '../../models/objects/RequestTypeResult';
import { ChartValue } from '../../models/objects/ChartValue';
import { QueryResult } from '../../models/objects/QueryResult';
import { PieChartValue } from '../../models/objects/PieChartValue';
import { fetchData, getIntervals, getMisTypes } from '../../utils/ApiCalls';
import { RequestValuesType } from '../../models/objects/RequestValues';
import { processingDataForChart, processingDataForTotal, targetMapping } from '../../utils/Processing';
import { ReportSearchForm } from '../../components/form/ReportSearchForm';
import { Chart } from '../../components/chart/Chart';
import ProtocolsByType from '../../components/protocols-by-type/ProtocolsByType';


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


function Dashboard() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
const [misTypes, setMisTypes] = useState<RequestTypeResult[]>([{id:"", displayName: "",}])
const [interval, setInterval] = useState<RequestTypeResult[]>([{id:"", displayName: "",}])  
const [chartData, setChartData] = useState<ChartValue[]>([]);
const [misTarget, setMisTarget] = useState<string[]>([]);
const [data, setData] = useState<QueryResult[]>([]);
const [totalByType, setTotalByType] = useState<PieChartValue[]>([]);

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

  setData(data)

 console.log(data)
 
 const mappedTarget = targetMapping(target)

 setMisTarget(mappedTarget)

 console.log(mappedTarget)


const chartPoints = processingDataForChart(data, mappedTarget);

setChartData(chartPoints)

 const dataForTotal =  processingDataForTotal(data)

 setTotalByType(dataForTotal)
return null
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
      <Container maxWidth="lg" className={classes.container} >
      <Grid
          container
          spacing={3}
        >
<Grid item xs={12} spacing={4}>
      <Paper className={classes.paper}>
      <ReportSearchForm 
      misTypes = {misTypes}
      interval = {interval}
      onSubmitForm={onResponceParamteresChanged}
      />
      </Paper>
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
      <Paper className={classes.paper}>
    <Chart 
    data = {chartData}
   target ={misTarget}
    /> 
    </Paper>
    </Grid>
    <Grid item xs={10} md={8} lg={3}>
    <ProtocolsByType
    data={totalByType}/>
    </Grid>
    </Grid>
      </Container>

    </Box>
      }
 
      </div>
  );
}

export default Dashboard;
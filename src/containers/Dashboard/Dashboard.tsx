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

const testData = {
  "data": [
      {
          "target": "1",
          "targetName": "Тип 1",
          "datapoints": [
              [
                  3,
                  1606770000000
              ],
              [
                3,
                1607780000000
            ],
              [
                1,
                1609780000000
            ]
          ]
      },
      {
          "target": "2",
          "targetName": "Тип 2",
          "datapoints": [
              [
                  6,
                  1606770000000
              ],
              [
                11,
                1607780000000
            ],
            [
              1,
              1609780000000
          ]
          ]
      },
      {
          "target": "3",
          "targetName": "Тип 3",
          "datapoints": [
              [
                  8,
                  1606770000000
              ],
              [
                5,
                1607780000000
            ],
            [
              7,
              1609780000000
          ]
          ]
      },
      {
          "target": "4",
          "targetName": "Тип 4",
          "datapoints": [
              [
                  2,
                  1606770000000
              ],
              [
                5,
                1606770000000
            ],
            [
              10,
              1609780000000
          ]
          ]
      },
      {
          "target": "5",
          "targetName": "Тип 5",
          "datapoints": [
              [
                  10,
                  1606770000000
              ],
              [
                1,
                1606770000000
            ],
            [
              2,
              1609780000000
          ]
          ]
      }
  ],
  "error": null
};


const useStyles = makeStyles((theme) => ({
  root: {
    
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },

  
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  }
}));


function Dashboard() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
const [misTypes, setMisTypes] = useState<RequestTypeResult[]>([{id:"", displayName: "",}])
const [interval, setInterval] = useState<RequestTypeResult[]>([{id:"", displayName: "",}])  
const [chartData, setChartData] = useState<ChartValue[]>([]);
const [misTarget, setMisTarget] = useState<string[]>([]);
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
 
 const mappedTarget = targetMapping(target)

 setMisTarget(mappedTarget)

 console.log(mappedTarget)


const chartPoints = processingDataForChart(testData.data, mappedTarget);

setChartData(chartPoints)

 const dataForTotal =  processingDataForTotal(testData.data)

 setTotalByType(dataForTotal)
return null
  };


  return (
    <div className="app-wrap">

    <h1>Billing Report</h1>
      {isLoading ?
        <div>loading...</div> :
        <Container maxWidth={false}>
      
      <Grid
          container
          spacing={3}
        >
<Grid item xs={12} spacing={4}>
      <Paper className={classes.paper}>
      <ReportSearchForm 
      // misTypes = {misTypes}
      // interval = {interval}
      misTypes = {[]}
      interval = {[]}
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
      }
 
      </div>
  );
}

export default Dashboard;
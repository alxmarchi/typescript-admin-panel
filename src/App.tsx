import React, { useState, useEffect } from 'react';
import './App.css';
import { ReportSearchForm } from './components/form/ReportSearchForm';
import { RequestValuesType } from './models/objects/RequestValues';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Container from '@material-ui/core/Container';
import DateFnsUtils from "@date-io/date-fns";
import {fetchData} from "./utils/ApiCalls"





function App() {
  const [dataFrom, setDataFrom] = useState<string>('pip');
 

  const onResponceParamteresChanged = async (values : RequestValuesType) => {
    let {from, to, target, interval} = values;
    setDataFrom(from)
  console.log(from);
  console.log(dataFrom);

  alert(JSON.stringify(values, null, 2));
  fetchData(values);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Container maxWidth="lg" >
      <ReportSearchForm onSubmitForm={onResponceParamteresChanged}/>
      </Container>
    </MuiPickersUtilsProvider>
  );
}

export default App;

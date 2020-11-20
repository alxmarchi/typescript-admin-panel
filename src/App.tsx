import React from 'react';
import './App.css';
import { ReportSearchForm } from './components/form/ReportSearchForm';
import { RequestValuesType } from './models/objects/RequestValues';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {fetchData} from "./utils/ApiCalls"


const onResponceParamteresChanged = async (values : RequestValuesType) => {
  let {from, to, target, interval} = values;


alert(JSON.stringify(values, null, 2));
fetchData(values);
};

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <ReportSearchForm onSubmitForm={onResponceParamteresChanged}/>
    </MuiPickersUtilsProvider>
  );
}

export default App;

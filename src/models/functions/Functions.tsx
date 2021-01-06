import { QueryResult } from '../objects/QueryResult';
import {RequestValuesType} from '../objects/RequestValues';
import {ChartValue} from "../objects/ChartValue";
import { RequestTypeResult} from "../objects/RequestTypeResult";
import { Message } from '../objects/Message';
import { PieChartValue } from '../objects/PieChartValue';

export type fetchDataType = (queryArgs: RequestValuesType) => Promise<QueryResult[]>;

export type prepareDataForChart = (queryRes: QueryResult[]) => ChartValue[];

export type PropsFormType = {
    onSubmitForm: (values: RequestValuesType) => void,
    misTypes: RequestTypeResult[],
    interval: RequestTypeResult[]
  }

  export type SettingsFormType = {
    onSubmitForm: (adress: string, port: string) => void,
    
  }

export type chartType = {
  data : ChartValue[]  | undefined, 
  target: string []
} 

export type  ExecuteType = ( type : string ) => Promise<Message<RequestTypeResult[]>>

export type PieChartType = {
  data : PieChartValue[]  | undefined, 
  
} 
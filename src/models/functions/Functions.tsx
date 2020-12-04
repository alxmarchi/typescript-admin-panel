import { QueryResult } from '../objects/QueryResult';
import {RequestValuesType} from '../objects/RequestValues';
import {ChartValue} from "../objects/ChartValue";
import { RequestTypeResult} from "../objects/RequestTypeResult";
import { Message } from '../objects/Message';

export type fetchDataType = (queryArgs: RequestValuesType) => Promise<QueryResult[]>;

export type prepareDataForChart = (queryRes: QueryResult[]) => ChartValue[];

export type PropsFormType = {
    onSubmitForm: (values: RequestValuesType) => void,
    misTypes: RequestTypeResult[],
    interval: RequestTypeResult[]
  }

export type chartType = {
  data : ChartValue[] | null | undefined, 
  //target: string []
} 

export type  ExecuteType = ( type : string ) => Promise<Message<RequestTypeResult[]>>
import { QueryResult } from '../objects/QueryResult';
import {RequestValuesType} from '../objects/RequestValues';

export type fetchDataType = (queryArgs: RequestValuesType) => Promise<void>;

export type PropsFormType = {
    onSubmitForm: (values: RequestValuesType) => void
  }
import { fetchDataType, ExecuteType } from "./../models/functions/Functions";
import { BASE_BILLING_ADRESS, BASE_HANDBOOK_ADRESS } from "./../service/config";
import {QueryResult} from "../models/objects/QueryResult"
import { RequestTypeResult} from "../models/objects/RequestTypeResult"

//const url = new URL(BASE_BILLING_ADRESS);


export const fetchData: fetchDataType = async (searchParams) => {
  
  const url = new URL (BASE_BILLING_ADRESS);

  const { target } = searchParams;
console.log(searchParams);

const cleanSearchParams = Object.keys(searchParams)
.filter((key) => searchParams[key]);

console.log(cleanSearchParams)

  Object.keys(searchParams)
    .filter((key) => searchParams[key])
    .forEach((key) => {

      if (typeof searchParams[key] === "string") 
      {
        url.searchParams.append(key, searchParams[key].toString());
      } 
else 
{
  target.forEach((value) => {
    url.searchParams.append("target", value);
  });
}
    });
   
     


    console.log(url.toString())

 const responce = await fetch(url.toString())
    .then((response) => response.json())
    .catch((e) => console.log(e));

    return responce
};

export const getMisTypes  = async () => {

  const misTypes = await getParamsForRequest("MisType");

  console.log(misTypes);
  
  return misTypes;
}

export const getIntervals  = async () => {

  const interval = await getParamsForRequest("Interval");

  console.log(interval);
  
  return interval;
}

const getParamsForRequest : ExecuteType = async ( type ) => {
  
  const url = new URL (BASE_HANDBOOK_ADRESS);
url.searchParams.append("type", type);

  const responce = await fetch(url.toString())
  .then((response) => response.json())
  .catch((e) => console.log(e));

  return responce

}
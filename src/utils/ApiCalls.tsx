import { Message } from "../models/objects/Message";
import { QueryResult } from "../models/objects/QueryResult";
import { fetchDataType, ExecuteType } from "./../models/functions/Functions";
import { BASE_BILLING_ADRESS, BASE_HANDBOOK_ADRESS } from "./../service/config";


const getAdressStringForUrl = () => {
  console.log(window.localStorage.getItem('BILLING_ADRESS'))



  const billingAdressFromLocalStorage = sessionStorage.getItem('BILLING_ADRESS');
  const billingAdressForFetch = billingAdressFromLocalStorage !== null ? billingAdressFromLocalStorage : BASE_BILLING_ADRESS;

  const handbookAdressFromLocalStorage = sessionStorage.getItem('HANDBOOK_ADRESS');
  const handbookAdressForFetch = handbookAdressFromLocalStorage !== null ? handbookAdressFromLocalStorage : BASE_HANDBOOK_ADRESS;

  const adress = {
    billing: billingAdressForFetch,
    handbook: handbookAdressForFetch,
  };

  return adress;
}

export const fetchData: fetchDataType = async (searchParams) => {
  
  
 const billingAdress = getAdressStringForUrl().billing;

 const url = new URL (billingAdress);
 
 // const url2 = new URL (BILLING_ADRESS || BASE_BILLING_ADRESS);

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

 const responce : Promise<Message<QueryResult[]>> = fetch(url.toString())
 
    .then((response) => 
      response.json())
     
    .catch((e) => console.log(e));

    console.log(responce)

    return (await responce).data
};

export const getMisTypes  = async () => {

  const misTypes = await getParamsForRequest("MisType");
  
  return misTypes;
}

export const getIntervals  = async () => {

  const interval = await getParamsForRequest("Interval");
  
  return interval;
}

const getParamsForRequest : ExecuteType = async ( type ) => {
  
  const handbookAdress = getAdressStringForUrl().handbook;

  const url = new URL (BASE_HANDBOOK_ADRESS);
url.searchParams.append("type", type);

  const responce = await fetch(url.toString())
  .then((response) => response.json())
  .catch((e) => console.log(e));
console.log(responce.data)

  return responce

}
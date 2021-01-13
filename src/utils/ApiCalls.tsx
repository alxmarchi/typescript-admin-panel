import { fetchDataType, ExecuteType } from "./../models/functions/Functions";
import { BASE_BILLING_ADRESS, BASE_HANDBOOK_ADRESS } from "./../service/config";


export const fetchData: fetchDataType = async (searchParams) => {
  
  console.log(window.localStorage.getItem('BILLING_ADRESS'))
 //const BILLING_ADRESS = JSON.parse(window.localStorage.getItem('BILLING_ADRESS') || '{}');
 
 
 const BILLING_ADRESS_FROM_LS = localStorage.getItem('BILLING_ADRESS');
 const BILLING_ADRESS = BILLING_ADRESS_FROM_LS !== null ? BILLING_ADRESS_FROM_LS : BASE_BILLING_ADRESS;

 const url = new URL (BILLING_ADRESS);
 
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

 const responce = await fetch(url.toString())
    .then((response) => response.json())
    .catch((e) => console.log(e));

    return responce.data
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
  
  const url = new URL (BASE_HANDBOOK_ADRESS);
url.searchParams.append("type", type);

  const responce = await fetch(url.toString())
  .then((response) => response.json())
  .catch((e) => console.log(e));

  return responce

}
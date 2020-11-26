import { fetchDataType } from "./../models/functions/Functions";
import { BASE_BILLING_ADRESS } from "./../service/config";

export const fetchData: fetchDataType = async (searchParams) => {
  
  var url = new URL(BASE_BILLING_ADRESS);

  const { target } = searchParams;

  Object.keys(searchParams)
    .filter((key) => key.length > 0)
    .forEach((key) => {

      if (typeof searchParams[key] === "string") 
      {
        url.searchParams.append(key, searchParams[key].toString());
      } 
      else
       {
        target.forEach((value) => {
          url.searchParams.append(key, value);
        });
      }
    });

  fetch(url.toString())
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((e) => console.log(e));
};

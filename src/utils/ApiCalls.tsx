import {fetchDataType} from './../models/functions/Functions';
import {BASE_BILLING_ADRESS} from './../service/config'



export const fetchData: fetchDataType = async (searchParams) => {

    var url = new URL(BASE_BILLING_ADRESS);
    
    const {target} = searchParams;

    console.log(searchParams)


    
//     Object.keys(searchParams).forEach(key => {
//       if ((keyof ) !==0){
      
//         url.searchParams.append(key, (searchParams[key]))
//       }

//     fetch(url.toString())
//     .then(response => response.json())
// .then(result => {
//   console.log(result)
// })
//             .catch(e => console.log(e));
          
            
  }
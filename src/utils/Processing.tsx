import { QueryResult } from "../models/objects/QueryResult"
import { ChartValue } from "../models/objects/ChartValue"


export const processingData = (fetchData : QueryResult[], target : string[]) : ChartValue[]=> {
    
  console.log(fetchData)
  let targetData: QueryResult[] =[]

  if (target.length > 0) {
    targetData = fetchData.filter(function (serie)  {
      console.log(serie)
      return target.indexOf(serie.target) > -1
     } );
    }
    else {
      targetData = fetchData;
    }

     const cleanData : any = []
     targetData.forEach((arr)=>{
   
       const type = arr.target
       arr.datapoints.forEach(datapoints =>{
   
         let date = new Date(datapoints[1] * 1000).toISOString().slice(0,10);
         let target= datapoints[0]
         const newRow : ChartValue = {date};
       newRow.name = date;
       newRow[type]= target
       cleanData.push(newRow);
       })
     })
  
    
     
       console.log(targetData)
       console.log(cleanData)
    //   const header = targetData[0].datapoints.map(line =>(new Date(line[1] * 1000).toISOString().slice(0,10)))
     
    //    const formatData = [];
     
      // for (let j = 0; j < header.length; j++)
      // {
      //   const newRow = {};
     
      //   newRow.name = header[j];
     
      //   formatData.push(newRow);
      // }
      // for (let i=0; i< target.length; i++){
      //  let label = target[i]
      //  for (let j = 0; j < header.length; j++)
      //  {
      //    formatData[j][label]= targetData[i].datapoints[j][0]
      // }
      //  }
    const chartValues : ChartValue[] = []
    return (
        chartValues
    );
}
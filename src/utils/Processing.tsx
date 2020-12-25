import { QueryResult } from "../models/objects/QueryResult"
import { ChartValue } from "../models/objects/ChartValue"
import { PieChartValue } from "../models/objects/PieChartValue"


export const processingDataForChart = (fetchData : QueryResult[], target : string[]) : ChartValue[]=> {
    
  console.log(target)
  console.log(fetchData)
  //const mappedTarget= targetMapping(target)
  const mappedTarget= target
  console.log(mappedTarget)
  let targetData: QueryResult[] =[]

  targetData = fetchData.filter(function (serie)  {
    
    return mappedTarget.indexOf(serie.targetName) > -1
   } );

     const header = targetData[0]?.datapoints.map(line =>(new Date(line[1]).toLocaleString().slice(0,10)))
     
     const chartValues : ChartValue[] = [];
     
     for (let j = 0; j < header.length; j++)
      {
        let date = header[j]
        let newRow : ChartValue  = {date};
        chartValues.push(newRow);
     }

    for (let i=0; i< mappedTarget.length; i++){
      
      let label = mappedTarget[i]

    for (let j = 0; j < header.length; j++)
    {
      chartValues[j][label]= targetData[i].datapoints[j][0];
      }
        }

       console.log(chartValues);

    return chartValues;
}

export const targetMapping = (target : string[]) : string[] => {
  
  let mappedTarget : string[] =[];

  if (target.length > 0){

    mappedTarget = target.map((misType)=>{
      let mappedType =''
  
  switch (misType){
    case 'EMIAS':
      mappedType = "Тип 1"
    break;
    //TODO SWITCH MISTYPES
    
  }

  return mappedType
    })
  }
  else {
    mappedTarget = ["Тип 1","Тип 2","Тип 3","Тип 4","Тип 5"]
  }
  
 return mappedTarget
}



export const processingDataForTotal = (targetData: QueryResult[]): PieChartValue[] =>{

  const data : PieChartValue[] = []


let totalProtocols :number = 0

targetData.forEach((arr)=>{

  const type = arr.targetName

  const dataPointsProtocols = arr.datapoints
  .map((datapoints) => datapoints[0])

    const sumProtocolsByType = dataPointsProtocols.reduce(
      (totalCount, recentCount) => totalCount + recentCount) 

    
      const newData : PieChartValue ={
        name: type,
        value: sumProtocolsByType
      }
  
        data.push(newData);
     
      
      totalProtocols+=sumProtocolsByType
}
)

console.log(data)

console.log(totalProtocols)

return data
}
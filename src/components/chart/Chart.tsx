import React from 'react';
import {chartType} from '../../models/functions/Functions'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import {
  useTheme,
  makeStyles
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { ChartValue } from '../../models/objects/ChartValue';

const useStyles = makeStyles(() => ({
  root: {}
}));


const chartData2 : ChartValue[] = [
{date:  new Date().toISOString().slice(0, 10),
type1: 1}
];

export  const Chart: React.FC<chartType> = (chartData) => {
   
  console.log(chartData)

  return (
    <ResponsiveContainer width="100%" height={400}>
       <BarChart
       width={500}
       height={300}
       data={chartData2}
       margin={{
        top: 20, right: 30, left: 20, bottom: 5
       }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="type1" stackId="a" fill="#8884d8" />
       </BarChart>
    </ResponsiveContainer>
  )
//   const target = props.target

//   return (
    
//     <ResponsiveContainer width="100%" height={400}>
      
//     <BarChart
      
//       data={props.data}
//       margin={{
//         top: 20, right: 30, left: 20, bottom: 5,
//       }}
//     >
      

     
// {target.map((item, index)=>(
//    <Bar key={index} dataKey={item} stackId="a" fill={item === "Тип 1" ? "#82ca9d" : item === "Тип 2" ? "#8884d8" : item === "Тип 3" ? "#ffc658" : "#3484d8"} />
// ))}

//     </BarChart>
    
//     </ResponsiveContainer>
  
//   );
 };


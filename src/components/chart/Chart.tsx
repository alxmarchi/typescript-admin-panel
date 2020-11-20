import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


// export const Chart: React.FC<> =({onSubmitForm})=>{
  
//     const target = props.target
  
//     return (
      
//       <ResponsiveContainer width="100%" height={400}>
        
//       <BarChart
        
//         data={props.data}
//         margin={{
//           top: 20, right: 30, left: 20, bottom: 5,
//         }}
//       >
        
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
       
//   {target.map((item, index)=>(
//      <Bar key={index} dataKey={item} stackId="a" fill={item === "Тип 1" ? "#82ca9d" : item === "Тип 2" ? "#8884d8" : item === "Тип 3" ? "#ffc658" : "#3484d8"} />
//   ))}
  
//       </BarChart>
      
//       </ResponsiveContainer>
    
//     );
//   }
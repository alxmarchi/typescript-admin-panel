import React from 'react';
import {chartType} from '../../models/functions/Functions'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import COLORS from '../../theme/colours';



export  const Chart: React.FC<chartType> = ({data, target}) => {
   
  return (
    <ResponsiveContainer width="100%" height={400}>
       <BarChart
       width={500}
       height={300}
       data={data}
       margin={{
        top: 20, right: 30, left: 20, bottom: 5
       }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      {target.map((item, index)=>(
   <Bar key={index} dataKey={item} stackId="a" fill={COLORS[index % COLORS.length]} />
))}
       </BarChart>
    </ResponsiveContainer>
  )

 };


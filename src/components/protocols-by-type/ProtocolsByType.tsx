import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import {
  PieChart, Pie, Cell, Tooltip
} from 'recharts';

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  makeStyles,
  useTheme
} from '@material-ui/core';
import COLORS from '../../theme/colours';
import { PieChartType } from '../../models/functions/Functions';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const ProtocolsByType : React.FC<PieChartType> = ({data}) => {

  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   setIsLoading(false);
  }, data);

  

  return (
    <Card
      className={clsx(classes.root)}
    >
      <CardHeader title="Всего протоколов по типу" />
      <Divider />
      {isLoading ?
        <div>loading...</div> :
      <CardContent>
      
      <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >

           <PieChart width={200} height={200} >
        <Pie
          data={data}
       
          innerRadius={50}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {
            data?.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Tooltip />
      </PieChart>
      </Box>
        <Box
          display="flex"
          justifyContent="center"
          
        >
          {data?.map(({
            name,
            value
          }, index) => (
            <Box
              key={name}
              p={1}
              textAlign="center"
            >
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {name}
              </Typography>
              <Typography
            //  style={}
              
                variant="h2"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>

      </CardContent>
      }
    </Card>
  );
};


export default ProtocolsByType;

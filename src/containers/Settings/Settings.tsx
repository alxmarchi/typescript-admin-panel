import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { SettingsForm } from '../../components/form/SettingsForm';
import { BILLING_HOSTNAME, BILLING_PORT, PROTOCOL, BILLING_PATHNAME, BASE_BILLING_ADRESS } from "../../service/config";

const useStyles = makeStyles((theme) => ({
    root: {
      
      minHeight: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
    },
  
    
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    }
  }));
  
function Settings () {
    const classes = useStyles();
  

    const onSubmitSettings = (adress: string, port: string):void =>{
console.log('newBillingAdress')
const newBillingAdress = PROTOCOL+adress+":"+port + '/' + BILLING_PATHNAME
console.log(newBillingAdress)
window.localStorage.setItem("BILLING_ADRESS", newBillingAdress)
    } 

    return (
        <Container maxWidth={false}>
      
        <Grid
            container
            spacing={3}
          >
  <Grid item xs={12} spacing={4}>
        <Paper className={classes.paper}>
        <SettingsForm 
        onSubmitForm={onSubmitSettings}
        />
        </Paper>
        </Grid>
        </Grid>
    </Container>
    )
}

export default Settings
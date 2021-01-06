import React from "react";
import { Formik, Field, Form } from "formik";
import { RequestValuesType } from "../../models/objects/RequestValues";
import { PropsFormType, SettingsFormType } from "../../models/functions/Functions";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardHeader, Divider, OutlinedInput, TextField } from "@material-ui/core";
import { BILLING_HOSTNAME, BILLING_PORT } from "../../service/config";

const useStyles = makeStyles((theme) => ({
    formControl: {
      // margin-left: theme.spacing(0),
  
      marginLeft: 15,
      marginRight: 15,
      minWidth: 120,
      // maxWidth: 300,
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
  }));

export const SettingsForm: React.FC<SettingsFormType> = ({ onSubmitForm}) => {
 const classes = useStyles();

  const initialValues = {
    adress: "", 
    port: ""
  };

//   const submit = (adress, port) => {
//     onSubmitForm(adress, port);
//   };
    
    return (
        <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmitForm(values.adress, values.port)}
    >
      {({
        values,
        errors,
        handleChange,
        handleSubmit,
        setFieldValue,
        setFieldError,
      }) => (
        <Form>
          {/* <Box display="flex">
            <Field
              name="adress"
              label="Адрес подключения"
              defaultValue={BILLING_HOSTNAME}
              value={values.adress}
              component={TextField}
              className={classes.formControl}
              variant="outlined"
              onChange={(adress: string) =>
                setFieldValue("adress", adress, false)
              }
            />
             
             <Field
              name="port"
              label="Порт подключения"
              value={values.port}
              component={TextField}
              defaultValue={BILLING_PORT}
              className={classes.formControl}
              variant="outlined"
              onChange={(port: string) =>
                setFieldValue("port", port, false)
              }
            />
         
            <Button type="submit" variant="contained" color="primary">
              Сохранить настройки
            </Button>
          </Box> */}
          <Card>
        <CardHeader
          subheader="Update settings"
          title="Password"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label={"Адрес: "+BILLING_HOSTNAME}
            margin="normal"
            name="adress"
            onChange={handleChange}
            type="adress"
            value={values.adress}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Порт"
            margin="normal"
            name="port"
            onChange={handleChange}
            type="port"
            value={values.port}
            variant="outlined"
          />
          <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Адрес</InputLabel>
        <OutlinedInput id="component-outlined" value={values.adress} onChange={handleChange} label="Name" />
      </FormControl>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button type="submit" variant="contained" color="primary">
              Сохранить настройки
            </Button>
        </Box>
      </Card>
        </Form>
      )}
    </Formik>
    )
}
import React from "react";
import { Formik, Field, Form } from "formik";
import { RequestValuesType } from "../../models/objects/RequestValues";
import { PropsFormType } from "../../models/functions/Functions";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";

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
  SearchForm: {
    margin: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const ReportSearchForm: React.FC<PropsFormType> = ({ onSubmitForm, misTypes, interval }) => {
  const classes = useStyles();

  const initialValues = {
    from: new Date().toISOString().slice(0, 10),
    to: new Date().toISOString().slice(0, 10),
    interval: "",
    target: [],
  };

  const submit = (values: RequestValuesType) => {
    onSubmitForm(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => submit(values)}
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
          <Box display="flex">
            <Field
              name="from"
              label="От"
              value={values.from}
              component={KeyboardDatePicker}
              className={classes.formControl}
              variant="outlined"
              format="dd/MM/yyyy"
              onChange={(date: Date) =>
                setFieldValue("from", date?.toISOString().slice(0, 10), false)
              }
            />
             
            <Field
              name="to"
              label="До"
              value={values.to}
              component={KeyboardDatePicker}
              className={classes.formControl}
              variant="outlined"
              format="dd/MM/yyyy"
              onChange={(date: Date) =>
                setFieldValue("to", date?.toISOString().slice(0, 10), false)
              }
            />
            <FormControl className={classes.formControl}>
              <InputLabel id="interval-select-label">Интервал</InputLabel>
              <Select
                labelId="interval-select-label"
                id="interval-select"
                name="interval"
                value={values.interval}
                onChange={handleChange}
              >
                {interval.map((type) => (
                      <MenuItem key={type.id} value={type.id}>
                        {type.displayName}
                      </MenuItem>
                    ))}
              </Select>
            </FormControl>
           <FormControl className={classes.formControl}>
                  <InputLabel id="mistypes">Типы ИС</InputLabel>
                  <Select
                    labelId="mistypes"
                    id="mistypes"
                    multiple
                    name="target"
                    value={values.target}
                    onChange={handleChange}
                    input={<Input />}
                  >
                    {misTypes.map((type) => (
                      <MenuItem key={type.id} value={type.id}>
                        {type.displayName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl> 
            <Button type="submit" variant="contained" color="primary">
              Получить отчет
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

import React from 'react';
import { Field } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function UseForm({ id, label, errors }) {

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Field
        name="task"
        as={TextField}
        label={label}
        id={id}
        style={{ width: 500 }}
        error={Boolean(errors.task)}
        helperText={errors.task}
      />
      <Button style={{ width: 300, marginTop: 20 }} type="submit">Add</Button>
    </div>
  );
}

export default UseForm;



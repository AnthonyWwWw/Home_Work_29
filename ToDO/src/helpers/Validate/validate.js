function validateTask(values){
    const errors = {};
    if (!values.task.trim()) {
      errors.task = 'Required';
    }
    if (values.task.length <= 5){
      errors.task = 'min length 5 item'
    }
    return errors;
}

export default validateTask;
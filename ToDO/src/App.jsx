import React from 'react';
import UseForm from './widget/UserForm';
import ListTask from './widget/ListTask';
import Footer from './widget/Footer';
import validateTask from './helpers/Validate/validate';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/tasksSlice';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const dispatch = useDispatch();

  const handelAddTask = (values, resetForm) => {
    const newTask = { id: uuidv4(), text: values.task };
    dispatch(addTask(newTask));
    resetForm();
  }

  return (
    <Formik
      initialValues={{ task: '' }}
      validate={validateTask}
      onSubmit={(values, { resetForm }) => {
        handelAddTask(values, resetForm);
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <Form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: 20 }}>
          <UseForm id='task-field' label='New ToDo' errors={errors} touched={touched} />
          <ListTask />
          <Footer />
        </Form>
      )}
    </Formik>
  );
}

export default App;

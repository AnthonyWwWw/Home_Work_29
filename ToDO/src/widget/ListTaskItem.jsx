import React from 'react';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/tasksSlice';

function ListTaskItem() {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', width: 600 }}>
      <h1 style={{background: '#F2F2F2', 
            borderRadius: 5, 
            margin: 5, 
            fontSize: 30, 
            fontWeight: 100, 
            width: 50, 
            textAlign: 'center'}}>{children}</h1>
      <ListItem style={{ background: '#F2F2F2', borderRadius: 5, margin: 5 }}>{task.text}</ListItem>
      <Button style={{ margin: 5, width: 100, background: '#c7f7b5' }}>done</Button>
      <Button style={{ margin: 5, width: 150, background: '#FA8072' }} onClick={handleDelete}>remove</Button>
    </div>
  );
}

export default ListTaskItem;

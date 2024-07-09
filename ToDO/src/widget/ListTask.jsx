import React from 'react';
import List from '@mui/material/List';
import ListTaskItem from './ListTaskItem';
import { useSelector } from 'react-redux';

function ListTask() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <List style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      {tasks.map((task, index) => (
        <ListTaskItem key={task.id} task={task}>{index + 1}</ListTaskItem>
      ))}
    </List>
  );
}

export default ListTask;

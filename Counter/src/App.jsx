import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { increment, decrement } from './redux/countSlice';


function App() {
  const count = useSelector(state => state.counter)
  const dispatch = useDispatch();

  const inc = () => {
    dispatch(increment());
  } 

  const dec = () => {
    dispatch(decrement());
  }
  
  return (
     <Box sx={{ width: '100%', maxWidth: 800}}>
       <Button variant="contained" style={{width: 250}} onClick={inc}>Increment</Button>
       <Button variant="contained" style={{width: 250}} onClick={dec}>Decrement</Button>

       <Typography variant="h1" gutterBottom>Value: {count}</Typography>
    </Box>
  )
}

export default App

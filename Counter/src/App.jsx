import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { increment, decrement } from './redux/countSlice';


function App() {
  const count = useSelector(state => state.counter)
  const dispatch = useDispatch();
 
  const handleIncrement = () => {
    dispatch(increment());
  } 

  const handleDecrement = () => {
    dispatch(decrement());
  }

  const onClick = () => {
    dispatch(increment());
  } 

  const onClick = () => {
    dispatch(decrement());
  } 
  
  return (
     <Box sx={{ width: '100%', maxWidth: 800}}>
       <Button variant="contained" style={{width: 250}} onClick={onClick}>Increment</Button>
       <Button variant="contained" style={{width: 250}} onClick={onClick}>Decrement</Button>

       <Typography variant="h1" gutterBottom>Value: {count}</Typography>
    </Box>
  )
}

export default App

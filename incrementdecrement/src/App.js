import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';
import './App.css';

function App() {
  const [count,setCount]=useState(0);

  const incCount=()=>{
    setCount(count+1)
  }
  const decCount=()=>{
    if(count===0){
      alert("Sorry, Zero limit reached")
    }else{

      setCount(count-1)
    }
  }

  return (
    <div className='main'>
      <div className='counter'>{count}</div>
      <div className='buttons'>
        <Button variant='contained' className='add' onClick={incCount}><AddIcon fontSize='large'/></Button>
        <Button variant='contained' className='remove' onClick={decCount}><RemoveIcon fontSize='large'/></Button>
      </div>

    </div>
  );
}

export default App;

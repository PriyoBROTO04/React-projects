import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const main={
  width:'100vw',
  height:'100vh',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  background:'linear-gradient(338deg, rgba(255,183,183,1) 0%, rgba(250,196,110,1) 100%)'
}
const heading={
  fontSize:'1.5rem',
  background:'#ffffff70',
  padding:'2rem',
  borderRadius:'30px',
  color:'#000060'

}
const greet=()=>{
  let hour=new Date(2023, 5, 3, 20).getHours();
  console.log(hour)
  if(hour<12){
    let greeting={
      style:{color:'green'},
      text:"Good Morning"
    }
    return greeting;
  }
  else if(hour>=12 && hour<19){
    let greeting={
      style:{color:'orange'},
      text:"Good Afternoon"
    }
    return greeting;
  }
  else{
    let greeting={
      style:{color:'black'},
      text:"Good Night"
    }
    return greeting;
  }
}

ReactDOM.render(
  <>
    <main style={main}>
      <h1 style={heading}>Hello Sir, <span style={greet().style}>{greet().text}</span></h1>
    </main>
  </>
  ,
  document.getElementById('root')
)

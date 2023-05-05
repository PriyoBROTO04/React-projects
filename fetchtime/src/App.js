import React, { useState } from "react";

const App =()=>{
  const time=new Date().toLocaleTimeString();
  const [Time,setTime]=useState(time)
  setInterval(()=>{
    setTime(new Date().toLocaleTimeString())
  },1000)

  return(
    <div className="container">
      <h1>{Time}</h1>
    </div>

  )
}

export default App;
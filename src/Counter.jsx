import React, { useState } from 'react'

const Counter = () => {
const [count,setcount]=useState(1);

const increase = ()=>{
    setcount(count + 1)
}
const deccrease = ()=>{
    setcount(count - 1 )
}

  return (
    <div className="flex  justify-center items-center min-h-screen">
       <div className=" bg-slate-200 h-52 p-6 rounded-2xl "  
       style={{
        backgroundImage: "url(' https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",  
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <h1  className="flex items-center justify-center mb-6 text-2xl text-white"> No of count {count}</h1>
       
    <div className=" ">
      <button  className="btn btn-primary mr-4"onClick={increase}>counter +</button>
      <button className="btn btn-primary"onClick={deccrease}>counter -</button>
      </div>
    </div>
    </div>
  )
}

export default Counter

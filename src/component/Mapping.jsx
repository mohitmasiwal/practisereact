import React from 'react'

const Mapping = (props) => {
  return (
    <div className=" ">
<div className="bg-gray-400 h-90 w-52 rounded-md p-2">
       <img  className="h-72 w-full hover:scale-90" src= {props.img} alt="" />
      <h1 className="text-bold text-white">{props.title} </h1>
      <h4  className="text-bold text-white">{props.year}</h4>
      </div>

    </div>
  )
}

export default Mapping 



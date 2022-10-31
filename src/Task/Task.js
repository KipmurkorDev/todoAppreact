import React from 'react'
import Todo from '../Todo/Todo';
import './task.css'

export default function Task({items, deleHandler, handleShow}) {
 
 
  return (
    <div >
     {
        items.map((item, index)=>(
         <Todo item={item}   index={index}  deleHandler={deleHandler}  handleShow={handleShow}/> 
        ))
     }
    
</div>
  )
}

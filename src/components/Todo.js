import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo,deleteTodo,removeTodo } from '../actions'
import "./Todo.css"

import { useSelector } from 'react-redux'

const Todo = () => {


  const [inputData,setInputData]=useState('')

  const dispatch = useDispatch()
  const list = useSelector(state=>state.todoReducer.list)

  return (
    <div>
      <h2 >Todo List App</h2>
      <input type="text" placeholder='Add items to list3 ...'  value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
      <span>
      <button onClick={()=> dispatch(addTodo(inputData),setInputData(""))}>Add</button>
      </span>
   
   <div>
   {list.map((item) => {
    return( 
      <div key={item.id}>
       <h3 >{item.data}</h3>
        <button onClick={()=> dispatch(deleteTodo(item.id))}>Delete</button>
        </div>
  )})}

    </div>
    </div>
  )
}

export default Todo

import React, { useState } from 'react'

const TodoInput = (props) => {
  const [inputText , setInputext]=useState('')
  return (
    <div className='flex'>
      <input className='py-2 px-16' type="text" placeholder='Enter Your Task' value={inputText} onChange={(e)=>{setInputext(e.target.value)}} />
      <button className='bg-white px-4 border-l-2 border-black' onClick={()=>{
        props.addTodo(inputText)
        setInputext("")
      }}>Add Todo</button>
    </div>
  )
}

export default TodoInput

import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {
  const [listTodo , setListTodo]=useState([])

  const addTodo =(inputText)=>{

    if (!inputText == '') {
      setListTodo([...listTodo,inputText])
    }
  }

  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }

  return (
    <center>
    <div className='w-[1100px] h-screen flex justify-center items-center'>
      <div className='bg-[#54074db2] p-10'>
      <TodoInput addTodo={addTodo}/>
      <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
    </center>
  )
}

export default App

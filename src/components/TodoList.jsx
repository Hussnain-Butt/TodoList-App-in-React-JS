import React from 'react'

const TodoList = (props) => {
  return (
    <div className='flex bg-[#ffffff] justify-between items-center py-3 mt-5 px-11'>
      <div>
      {props.item}
      </div>
      <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete cursor-pointer" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>

    </div>
  )
}

export default TodoList

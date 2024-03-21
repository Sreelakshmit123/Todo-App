import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, deleteTodo } from '../Slices/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
 
 

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
   
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
 

  return (
   <div className='container mt-5  '>
        <ul className='pt-2'>
          {todos.map((todo) => (
            <li  style={{backgroundColor:'white'}}  className='pb-3 ps-3 pt-3 ms-2 me-5 d-block' key={todo.id}>
              <input type="checkbox"checked={toggleTodo.complete} onChange={() => handleToggleTodo(todo.id)}/>
              {todo.text}
              <button style={{float:'right'}} className=' btn btn-danger  p-2 ps-3 pe-3 me-5' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
   </div>
  );
};

export default TodoList;

import React from 'react';
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
   <div style={{backgroundColor:'lightgreen'}} className='container mt-5   '>
        <ul className='pt-2'>
          {todos.map((todo) => (
            <li className='pb-2 d-block' key={todo.id}>
              <input  
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />
              {todo.text}
              <button style={{marginLeft:'50rem'}} className=' btn btn-danger p-1' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
   </div>
  );
};

export default TodoList;

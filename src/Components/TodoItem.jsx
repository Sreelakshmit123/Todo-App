import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './Slices/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleTodo}
      />
      {todo.text}
      <button className="" onClick={handleDeleteTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;

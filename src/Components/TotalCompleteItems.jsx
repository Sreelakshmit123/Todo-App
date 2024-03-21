import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
  const todos = useSelector((state) => state.todos);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className='ms-5 mt-5 text-black fw-bolder'>
      <p >Total Completed Items: {completedTodos.length}</p>
    </div>
  );
};

export default TotalCompleteItems;

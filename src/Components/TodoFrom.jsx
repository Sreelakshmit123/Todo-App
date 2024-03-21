import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Slices/todoSlice';

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <div className='ms-5' >
      <input style={{padding:'11px'}} type="text" value={newTodo} placeholder='Add todo...' onChange={(e) => setNewTodo(e.target.value)}/>
      <button className='ms-5 btn btn-danger' onClick={handleAddTodo}>Submit</button>
    </div>
  );
};

export default TodoForm;

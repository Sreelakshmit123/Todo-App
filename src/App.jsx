
import React from 'react';
import TodoForm from './Components/TodoFrom';
import TodoList from './Components/TodoList';
import TotalCompleteItems from './Components/TotalCompleteItems';


function App() {
  return (
    <div>
      <h1 className='ms-5'>My Todo List</h1>
      <TodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
}

export default App;


import React from 'react';
import TodoForm from './Components/TodoFrom';
import TodoList from './Components/TodoList';
import TotalCompleteItems from './Components/TotalCompleteItems';


function App() {
  return (
    <>
      <div style={{marginTop:'150px'}}  className='container align-items-center border rounded bg-info'>
        <h1 style={{height:'55px'}} className='  ms-5 text-center mt-5 '>My Todo List</h1>
        <TodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </>
  );
}

export default App;

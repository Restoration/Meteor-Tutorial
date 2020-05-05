import React from 'react';

const getTasks = () => {
  return [
    { _id: 1, text: 'This is task 1' },
    { _id: 2, text: 'This is task 2' },
    { _id: 3, text: 'This is task 3' },
  ];
}

const Tasks = () => {
  return (
    <ul>
      {getTasks().map((task) => (
        <li key={task._id}>{task.text}</li>
      ))}
    </ul>
  )
}

export const App = () => {
  return (
  <div className="container">
    <header>
      <h1>Todo List</h1>
    </header>
    <Tasks />
  </div>
  );
}

import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';

const App = (props) => {
  console.log(props)
  return (
  <div className="container">
    <header>
      <h1>Todo List</h1>
    </header>
    <ul>
      {props.tasks.map((task) => (
        <li key={task._id}>{task.text}</li>
      ))}
    </ul>
  </div>
  );
}
export default withTracker(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
})(App);

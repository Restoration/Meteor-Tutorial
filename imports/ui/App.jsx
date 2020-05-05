import React, { useState } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';
import ReactDOM from 'react-dom';

const App = (props) => {
  console.log(props)

  const [value, setValue] = useState();
  const handleSubmit = () => {
    Tasks.insert({
      text: value,
      createdAt: new Date(), // current time
    });
    setValue('');
    event.preventDefault();
  }
  return (
  <div className="container">
    <header>
      <h1>Todo List</h1>
    </header>
    <form className="new-task">
      <input
        type="text"
        placeholder="Type to add new tasks"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={()=> handleSubmit()}>Send</button>
    </form>
    <ul>
      {props.tasks.map((task) => (
        <li key={task._id}>{task.text}</li>
      ))}
    </ul>
  </div>
  );
}
export default withTracker(() => {
  // ソート処理を追加
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(App);

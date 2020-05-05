import React, { useState } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';

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

  const toggleChecked = (task) => {
    Tasks.update(task._id, {
      $set: { checked: !task.checked },
    });
  }

  const deleteThisTask = (task) => {
    Tasks.remove(task._id);
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
      {props.tasks.map((task, i) => {
        const taskClassName = task.checked ? 'checked' : '';
        return (
          <li key={i} className={taskClassName}>
            <button className="delete" onClick={ () => deleteThisTask(task)}>
              &times;
            </button>
            <input
              type="checkbox"
              readOnly
              checked={!!task.checked}
              onClick={() => toggleChecked(task)}
            />
            <span className="text">{task.text}</span>
          </li>
        )
      })}
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

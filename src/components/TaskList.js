import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompleted } from '../redux/tasksSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
          <button onClick={() => dispatch(toggleTaskCompleted(index))}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: loadState(),
  reducers: {
    addTask: (state, action) => {
      state.push({ title: action.payload, completed: false });
      saveState(state);
    },
    deleteTask: (state, action) => {
      const newState = state.filter((_, index) => index !== action.payload);
      saveState(newState);
      return newState;
    },
    toggleTaskCompleted: (state, action) => {
      const task = state[action.payload];
      task.completed = !task.completed;
      saveState(state);
    },
  },
});

export const { addTask, deleteTask, toggleTaskCompleted } = tasksSlice.actions;
export default tasksSlice.reducer;

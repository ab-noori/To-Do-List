import generateJoke from './generateJoke.js';
import './styles/main.scss';
import todoIcom from './assets/todo-list.svg';
import UI from './modules/ui.js';
import Store from './modules/store.js';

// Todo List Icon
const laughImg = document.getElementById('laughImg');
laughImg.src = todoIcom;

// Event: Display Tasks
document.addEventListener('DOMContentLoaded', UI.displaytasks);

// Event: Add a task
document.querySelector('#add-form').addEventListener('keypress', (e) => {
  // prevent default submit

  if (e.key === 'Enter') {
    e.preventDefault();
    // get form values
    UI.getNewTask();
  }
});

// Event: Delete a task
document.querySelector('#todo-list').addEventListener('click', (e) => {
  // remove task from Store
  Store.removeTask(e.target);

  // remove task from UI
  UI.deleteTask(e.target);
});

// Event: edit a task
document.querySelector('#todo-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-pen-to-square')) {
    UI.editTask(e.target);
  }
});

// Remove later
generateJoke();
const jokeBtn = document.getElementById('jokBtn');
jokeBtn.addEventListener('click', generateJoke);
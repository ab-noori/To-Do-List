import generateJoke from './generateJoke.js';
import './styles/main.scss';
import todoIcom from './assets/todo-list.svg';
import UI from './modules/ui.js';

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

// Remove later
generateJoke();
const jokeBtn = document.getElementById('jokBtn');
jokeBtn.addEventListener('click', generateJoke);
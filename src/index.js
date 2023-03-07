import generateJoke from './generateJoke.js';
import './styles/main.scss';
import todoIcom from './assets/todo-list.svg';

// Define the to-do tasks as an array of objects
const tasks = [
  {
    description: 'Buy groceries',
    completed: false,
    index: 0,
  },
  {
    description: 'Do laundry',
    completed: true,
    index: 1,
  },
  {
    description: 'Clean the house',
    completed: false,
    index: 2,
  },
];

// Get a reference to the HTML ul element
const todoList = document.getElementById('todo-list');

// Loop over the tasks array and create an HTML li element for each task
tasks.forEach((task) => {
  // Create a new li element
  const listItem = document.createElement('li');

  // Set the text content of the li element to the task description
  const span = document.createElement('span');
  span.textContent = task.description;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  listItem.appendChild(checkbox);
  listItem.appendChild(span);

  // If the task is completed, add a "completed" class to the li element
  if (task.completed) {
    listItem.classList.add('completed');
  }

  // Add the li element to the ul element
  todoList.appendChild(listItem);
});

const laughImg = document.getElementById('laughImg');

laughImg.src = todoIcom;

generateJoke();

const jokeBtn = document.getElementById('jokBtn');
jokeBtn.addEventListener('click', generateJoke);
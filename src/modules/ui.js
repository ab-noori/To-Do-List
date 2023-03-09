// UI Class: Handle UI Tasks
import Task from './task.js';
import Store from './store.js';

class UI {
  static displaytasks = () => {
    const tasks = Store.getTasks();
    tasks.forEach((task) => UI.addTaskToList(task));
  }

  static getNewTask = () => {
    const newTask = document.querySelector('#new-task').value;

    // valitdate empty form
    if (newTask !== '') {
      // making object of Book class
      const task = new Task(newTask);

      // add book to UI
      UI.addTaskToList(task);

      // add book to store
      Store.addTask(task);

      // clear fields
      UI.clearFields();
    }
  }

  static addTaskToList = (task) => {
    const list = document.querySelector('#todo-list');

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = task.description;

    li.appendChild(checkbox);
    li.appendChild(span);

    if (task.completed) {
      li.classList.add('completed');
    }

    list.appendChild(li);
  }

  static deleteTask = (el) => {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields = () => {
    document.querySelector('#new-task').value = '';
  }
}

export default UI;
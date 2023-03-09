// Store Class: Handle Storage

class Store {
    static getTasks = () => {
      let tasks;
      if (localStorage.getItem('tasks') === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
      }

      return tasks;
    }

    static addTask = (task) => {
      const tasks = Store.getTasks();
      task.index = (tasks.length) + 1;
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static removeTask = (id) => {
      const tasks = Store.getTasks();

      tasks.forEach((task, index) => {
        if (task.index === id) {
          tasks.splice(index, 1);
        }
      });

      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

export default Store;
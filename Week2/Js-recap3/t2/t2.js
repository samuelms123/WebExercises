// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const ulElem = document.querySelector('ul');

for (let task of todoList) {
  const liElem = document.createElement('li');

  const inputElem = document.createElement('input');
  inputElem.id = `todo-${task.id}`;
  inputElem.type = 'checkbox';
  inputElem.checked = task.completed;

  const labelElem = document.createElement('label');
  labelElem.htmlFor = `todo-${task.id}`;
  labelElem.innerText = task.task;

  liElem.append(inputElem, labelElem);
  ulElem.append(liElem);
}

/*
      <li>
        <input type="checkbox" id="todo-1" checked />
        <label for="todo-1">Buy milk</label>
      </li>
      <li>
        <input type="checkbox" id="todo-2" />
        <label for="todo-2">Buy eggs</label>
      </li>
      <li>
        <input type="checkbox" id="todo-3" />
        <label for="todo-3">Buy bread</label>
      </li>
*/

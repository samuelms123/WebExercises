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

function createItem(id, task, completed) {
  const liElem = document.createElement('li');

  const inputElem = document.createElement('input');
  inputElem.id = `todo-${id}`;
  inputElem.type = 'checkbox';
  inputElem.checked = completed;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Del';

  deleteBtn.addEventListener('click', function () {
    const index = todoList.findIndex((t) => t.id === id);
    if (index > -1) {
      todoList.splice(index, 1);
    }

    ulElem.removeChild(liElem);
    console.log(todoList);
  });

  inputElem.addEventListener('change', function () {
    task.completed = inputElem.checked;
    console.log(`
                Task: ${id}
                Mission:  ${task}
                Completed: ${completed}
                `);
  });

  const labelElem = document.createElement('label');
  labelElem.htmlFor = `todo-${id}`;
  labelElem.innerText = task;

  liElem.append(inputElem, labelElem, deleteBtn);
  ulElem.append(liElem);
}

for (let task of todoList) {
  createItem(task.id, task.task, task.completed);
}

const modal = document.querySelector('dialog');
const addBtn = document.querySelector('.add-btn');
const form = document.querySelector('form');
const input = form.querySelector('input');

addBtn.addEventListener('click', function () {
  modal.showModal();
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const taskValue = input.value.trim();

  if (taskValue) {
    const idNew = todoList.length + 1;

    todoList.push({
      id: idNew,
      task: taskValue,
      completed: false,
    });

    console.log(todoList);

    createItem(idNew, taskValue, false);

    modal.close();
  }
});

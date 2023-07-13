import { saveLocalStorage } from './localStorage.js';

export default class ToDoList {
  constructor(container) {
    this.container = container;
    this.list = [];
  }

createToDo = (toDo) => {
  const toDoItem = document.createElement('form');
  toDoItem.classList.add('toDoItem');

  toDoItem.innerHTML = `
  <input type="checkbox" ${toDo.completed ? 'checked' : ''}>
  <input class="description" value="${toDo.description}">
  <div class="dragger">&#8942;</div>
  <div class="deleter hidden">&#128465;</div>
  `;
  const description = toDoItem.querySelector('.description');
  const dragger = toDoItem.querySelector('.dragger');
  const deleter = toDoItem.querySelector('.deleter');

  deleter.addEventListener('click', (e) => {
    this.removeToDo(e, toDo);
    this.reorderIndex();
    saveLocalStorage(this);
  });

  description.addEventListener('change', (e) => {
    toDo.description = e.target.value;
    saveLocalStorage(this);
  });

  description.addEventListener('focus', () => {
    dragger.classList.add('hidden');
    deleter.classList.remove('hidden');
  });

  description.addEventListener('blur', () => {
    setTimeout(() => {
      dragger.classList.remove('hidden');
      deleter.classList.add('hidden');
    }, 150);
  });
  this.container.appendChild(toDoItem);
}

removeToDo = (e, toDoData) => {
  e.target.parentElement.remove();
  this.list = this.list.filter((toDoFilter) => toDoFilter !== toDoData);
}

reorderIndex = () => {
  this.list = this.list.map((element, index) => {
    element.index = index + 1;
    return element;
  });
}
}
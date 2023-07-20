import './style.css';
import { getLocalStorage, saveLocalStorage } from './localStorage.js';
import ToDoList from './toDoList.js';
import ToDoItem from './toDoItem.js';
import { clearAllCompleted } from './checkBox.js';

const clearButton = document.querySelector('.clearButton');
const addToDo = document.querySelector('#addToDo');
const addList = document.querySelector('#addList');
const container = document.querySelector('#container');
const myToDo = new ToDoList(container);

addToDo.addEventListener('submit', (e) => {
  e.preventDefault();
  const item = new ToDoItem(
    addList.value,
    myToDo.list.length + 1,
  );
  myToDo.list.push(item);
  myToDo.createToDo(item);
  saveLocalStorage(myToDo);
  addList.value = '';
});

clearButton.addEventListener('click', () => {
  clearAllCompleted(myToDo);
  saveLocalStorage(myToDo);
});

getLocalStorage(myToDo);

/**
 * @jest-environment jsdom
 */

import { clearAllCompleted } from './checkBox.js';
import ToDoList from './toDoList.js';

document.body.innerHTML = `
      <div id="container"></div>
      <button class="clearButton">Clear all completed</button>`;
const container = document.querySelector('#container');
const myToDo = new ToDoList(container);
const item = {
  description: 'text',
  completed: false,
  index: 0,
  markUp: null,
};
myToDo.list.push(item);
myToDo.createToDo(item);
// Created and event to trigger the Event listener of the description input
const changeEvent = new Event('change');
describe('edit description', () => {
  const description = document.querySelector('.description');
  description.value = 'new task'; // changed the value of the description input in the DOM
  // Executed the event to trigger the event listener inside the myToDO object
  description.dispatchEvent(changeEvent);
  test('Test if description changed', () => {
    expect(myToDo.list[0].description).toBe('new task');
  });
});

describe('update state', () => {
  const checkBox = document.querySelector('.checkBox');
  checkBox.checked = true; // changed the state of the checkBox input in the DOM
  // Executed the event to trigger the event listener inside the myToDO object
  checkBox.dispatchEvent(changeEvent);
  test('Test if state changed', () => {
    expect(myToDo.list[0].completed).toBeTruthy();
  });
});

describe('clear all completed', () => {
  const item2 = {
    description: 'task 2',
    completed: false,
    index: 1,
    markUp: null,
  };
  myToDo.list.push(item2);
  myToDo.createToDo(item2);

  test('Test if completed tasks are removed', () => {
    clearAllCompleted(myToDo);

    expect(myToDo.list).toHaveLength(1);
  });
});
/**
 * @jest-environment jsdom
 */

import ToDoList from './toDoList.js';

document.body.innerHTML = `
      <div id="container"></div>
      <button class="clearButton">Clear all completed</button>`;
const container = document.querySelector('#container');
const clearButton = document.querySelector('.clearButton');
const myToDo = new ToDoList(container);
const item = {
  description: 'text',
  completed: false,
  index: 0,
  markUp: null,
};
myToDo.list.push(item);
myToDo.createToDo(item);

describe('Update description', () => {
  const changeEvent = new Event('change') // Created and event to trigger the Event listener of the description input
  const description = document.querySelector('.description')
  description.value = 'new task' // changed the value of the description input in the DOM
  description.dispatchEvent(changeEvent) // Executed the event to trigger the event listener inside the myToDO object

  test('Test if description changed',() => {
    expect(myToDo.list[0].description).toBe('new task')
  })

})
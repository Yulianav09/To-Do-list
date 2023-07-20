/**
 * @jest-environment jsdom
 */

import ToDoList from './toDoList.js';

document.body.innerHTML = `
      <div id="container"></div>`;
const container = document.querySelector('#container');
const myToDo = new ToDoList(container);
const item = {
  description: 'text',
  completed: false,
  index: 0,
  markUp: null,
};
myToDo.list.push(item);

describe('Adding', () => {
  test('Test if container is empty', () => {
    expect(container.innerHTML).toHaveLength(0);
  });

  test('Test if HTML is added to the container', () => {
    myToDo.createToDo(item);
    expect(container.innerHTML).not.toHaveLength(0);
  });
});

describe('Remove elements', () => {
  test('test removing elements', () => {
    const button = document.querySelector('.deleter');
    const event = { target: button };
    myToDo.removeToDo(event, item);
    expect(container.innerHTML).toHaveLength(0);
  });
  test('Test container', () => {
    expect(container.innerHTML.length).not.toBeGreaterThan(0);
  });
});
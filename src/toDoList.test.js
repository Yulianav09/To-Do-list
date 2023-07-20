/**
 * @jest-environment jsdom
 */

import { describe } from 'yargs';
import ToDoList from './toDoList.js';
  document.body.innerHTML =`
      <div id="container"></div>`;
  const container = document.querySelector('#container');
  const myToDo = new ToDoList(container);
  const item = {
    description : "text",
    completed : false,
    index : 0,
    markUp : null,
  }
  myToDo.list.push(item);

  describe('Adding', () => {

    test('Test if container is empty', () => {
      // expect(myToDo).toBeInstanceOf(ToDoList)
      expect(container.innerHTML).toHaveLength(0);
    })

    test('Test if HTML is added to the container', () => {
      myToDo.createToDo(item);
      expect(container.innerHTML).not.toHaveLength(0);
    });

  });

  describe('Remove elements', () => {
    test('test removing elements', () =>{
      myToDo.removeToDo
    })
  })
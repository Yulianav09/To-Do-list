/**
 * @jest-environment jsdom
 */

import ToDoList from './toDoList.js';
  document.body.innerHTML =`
      <div id="container"></div>`;
  const container = document.querySelector('#container');
  const myToDo = new ToDoList(container);

  describe('Adding', () => {

  console.log(localStorage);
  const myToDo = new ToDoList(container);

  const item = {
    description : "text",
    completed : false,
    index : 0,
    markUp : null,
  }

    test('Test if container is empty', () => {
      // expect(myToDo).toBeInstanceOf(ToDoList)
      expect(container.innerHTML).toHaveLength(0);
    })

    test('if HTML is added to the container', () => {
      myToDo.createToDo(item);
      expect(container.innerHTML).not.toHaveLength(0);
    });

    // test('test removing elements', () =>{
    //   myToDo.removeToDo
    // })
  });
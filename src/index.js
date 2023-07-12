import './style.css';

const toDo = [
  {
    description: 'Lor',
    completed: true,
    index: 9
  },
  {
    description: 'kjlkl',
    completed: true,
    index: 1
  },
  {
    description: 'dhxfhn',
    completed: false,
    index: 7
  }
]

const container = document.querySelector('#container');

const createToDo = (toDo) => {
  const toDoItem = document.createElement('article');
  toDoItem.classList.add('toDoItem');
 
  toDoItem.innerHTML = `
  <input type="checkbox" ${toDo.completed ? `checked`:``}>
  <p>${toDo.description}</p>
  <div class="dragger">&#8942;</div>
  `
  container.appendChild(toDoItem);
}
toDo.sort((a,b) => a.index-b.index);
for (let i = 0; i < toDo.length; i += 1) {
  createToDo(toDo[i])
}
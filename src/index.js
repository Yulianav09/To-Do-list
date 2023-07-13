import './style.css';
const container = document.querySelector('#container');
const toDo = [
  {
    description : "task number 1",
    completed : false,
    index : 1, 
  },
  {
    description : "task number 2",
    completed : true,
    index : 2, 
  },
  {
    description : "task number 3",
    completed : false,
    index : 3, 
  }
]

const createToDo = (toDo) => {
  const toDoItem = document.createElement('article');
  toDoItem.classList.add('toDoItem');

  toDoItem.innerHTML = `
  <input type="checkbox" ${toDo.completed ? 'checked' : ''}>
  <input class="description" value="${toDo.description}">
  <div class="dragger">&#8942;</div>
  <div class="deleter hidden">&#128465;</div>
  `
  container.appendChild(toDoItem);
}

toDo.sort((a,b) => a.index-b.index);
for (let i = 0; i < toDo.length; i += 1) {
  createToDo(toDo[i])
}

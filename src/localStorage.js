export const getLocalStorage = (toDo) => {
  if (localStorage.getItem('toDo')) {
    toDo.list = JSON.parse(localStorage.getItem('toDo'));
    for (let i = 0; toDo.list.length > i; i += 1) {
      toDo.createToDo(toDo.list[i]);
    }
  }
};

export const saveLocalStorage = (toDo) => {
  localStorage.setItem('toDo', JSON.stringify(toDo.list));
};

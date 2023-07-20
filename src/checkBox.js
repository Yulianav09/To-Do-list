export const toggleCheck = (element, state) => {
  if (state) {
    element.classList.add('checkedTask');
  } else {
    element.classList.remove('checkedTask');
  }
};

export const clearAllCompleted = (ToDo) => {
  ToDo.list = ToDo.list.filter((toDoFilter) => {
    if (toDoFilter.completed) toDoFilter.markUp.remove();
    return !toDoFilter.completed;
  });
};
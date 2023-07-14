export default (element, state) => {
  if (state) {
    element.classList.add('checkedTask');
  } else {
    element.classList.remove('checkedTask');
  }
};
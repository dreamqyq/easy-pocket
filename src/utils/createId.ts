let id = parseInt(window.localStorage.getItem('maxId') || '0');
const createId = () => {
  id += 1;
  window.localStorage.setItem('maxId', JSON.stringify(id));
  return id;
};

export { createId };

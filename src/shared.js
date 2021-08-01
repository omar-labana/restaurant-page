const create = (elementName, styles = false, text = false) => {
  const element = document.createElement(elementName);
  if (styles) {
    styles.forEach((style) => {
      element.classList.add(style);
    });
  }
  if (text) {
    element.textContent = text;
  }
  return element;
};

const clearView = () => {
  document.getElementById('view').innerHTML = '';
};

const createFrame = () => create('div', ['border-2', 'rounded-md', 'my-3', 'w-1/2', 'mx-auto', 'text-gray-100', 'text-xl']);

export { create, clearView, createFrame };
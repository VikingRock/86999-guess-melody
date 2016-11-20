export const getElementFromTemplate = (htmlString) => {

  const domElement = document.createElement('div');
  domElement.innerHTML = htmlString;

  return domElement.firstChild;
};

export const renderElement = (domElement) => {

  const mainElement = document.querySelector('.main');
  mainElement.parentNode.replaceChild(domElement, mainElement);
};

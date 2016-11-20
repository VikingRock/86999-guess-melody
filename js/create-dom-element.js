export const getElementFromTemplate = (htmlString) => {

  let domElement = document.createElement('div');
  domElement.innerHTML = htmlString;


  return domElement.firstChild;
};

export const renderElement = (domElement) => {


  let mainElement = document.querySelector('.main');
  mainElement.parentNode.replaceChild(domElement, mainElement);

  return domElement;

};

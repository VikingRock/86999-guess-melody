export const getElementFromTemplate = (htmlString) => {

  let domElement = document.createElement('div');
  domElement.innerHTML = htmlString;


  return domElement.firstChild;
};

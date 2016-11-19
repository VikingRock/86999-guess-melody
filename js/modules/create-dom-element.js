export const getElementFromTemplate = (htmlString) => {

  let domElement = document.createElement('div');
  domElement.innerHTM = htmlString;


  return domElement.firstChild;
};

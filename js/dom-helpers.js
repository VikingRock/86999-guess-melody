//TODO - delete this file
/**
 * accepts an html string
 * and returns a DOM element created from that string
 * @param {string} htmlString - template html string with one root element
 * @return {Node} DOM element
 */
export const getElementFromTemplate = (htmlString) => {

  const domElement = document.createElement('div');
  domElement.innerHTML = htmlString;

  return domElement.firstChild;
};

/**
 * accepts a DOM element and replaces main section with its content
 * @param {Node} domElement which can be obtained from getElementFromTemplate function
 */
export const renderElement = (domElement) => {

  const mainElement = document.querySelector('.main');
  mainElement.parentNode.replaceChild(domElement, mainElement);
};

export default class AbstractView {

  constructor(inputData) {
    this.inputData = inputData;
  }

  /**
   * returns a DOM element created from getMarkup()
   * and binds event handlers to it
   * @return {Element}
   */
  get element() {
    if (!this._element) {
      const domElement = document.createElement('div');
      domElement.innerHTML = this.getMarkup();
      this._element = domElement.firstChild;
      this.bindHandlers();
    }
    return this._element;
  }

  renderView() {
    const mainElement = document.querySelector('.main');
    mainElement.parentNode.replaceChild(this.element, mainElement);
  }

  getMarkup() {
    throw new Error(`Abstract method should be implemented`);
  }

  bindHandlers() {

  }

  clearHandlers() {

  }
}

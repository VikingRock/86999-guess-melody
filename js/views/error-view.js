import AbstractView from './abstract-view';

class ErrorView extends AbstractView {

  constructor(inputData) {
    super(inputData);
  }

  getMarkup() {
    return `<section class="main main--result">
    <img src="img/broken.png" width="200"/>
    <h2 class="title">Ошибка загрузки данных</h2>
    <a class="reload" href = "/">Перезагрузить</a>
    </section>`;
  }
}

export default (data) => new ErrorView(data);

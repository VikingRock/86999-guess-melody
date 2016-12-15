import Application from 'application';
import 'whatwg-fetch';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status} : ${response.statusText}`);
  }
};

const parseJSON = (response) => response.json();

window.fetch('https://intensive-ecmascript-server-qybmlbpxoi.now.sh/guess-melody/questions')
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => {
      Application.data = data;
    })
    .then(Application.showWelcome)
    .catch(Application.showError);


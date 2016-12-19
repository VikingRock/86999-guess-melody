const restURL = 'https://intensive-ecmascript-server-zevreglhzz.now.sh/guess-melody/stats/';
const userId = '86999';

/**
 * formats time to minutes and seconds notation
 * @param {number} seconds
 * @return {object} minutes and seconds
 */
export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  return {minutes, seconds};
};

/**
 * calculates statistics based on user progress
 * and compares user results with an array of previous results
 * @param {array} stats
 * @param {number} points
 * @param {number} time - raw time in seconds
 * @param {object} fTime - formatted time in minutes abd seconds
 * @return {object} stats
 */
export const calcStats = (stats, points, time, fTime) => {
  let newStats = JSON.parse(JSON.stringify(stats));
  const currentResult = {
    time: time,
    answers: points,
    recent: true
  };
  newStats.push(currentResult);
  const totalResultsNum = newStats.length;
  let currentGamePlace = totalResultsNum;

  newStats.sort((a, b) => {
    if (a.answers === b.answers) {
      return a.time - b.time;
    }
    return b.answers - a.answers;
  });

  newStats.find((el, idx) => {
    if (el.recent === true) {
      currentGamePlace = idx + 1;
      return true;
    }
    return false;
  });

  const successPercent = Math.round((totalResultsNum - currentGamePlace) / totalResultsNum * 100);

  return {time: fTime, correctAnswers: currentResult.answers, percents: successPercent};
};

/**
 * download statistics from server
 * and call the callback
 * @return {object} promise
 */
export const getStats = () => {

  return fetch(restURL + userId,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then((res) => {
        return res.json();
      });
};

/**
 * displays text about success or failure of
 * uploading new stats to server
 * @param {string} text
 */
const displayUploadStatus = (text) => {
  const successResult = document.createElement('div');
  successResult.innerHTML = text;
  successResult.classList.add('server-upload');
  document.body.appendChild(successResult);

  setTimeout(() => {
    const elem = document.body.querySelector('.server-upload');
    elem.parentNode.removeChild(elem);
  }, 3000);
};

/**
 * uploads current game's results to server
 * @param {object} newRecord - time and answers
 */
export const setStats = (newRecord) => {
  fetch(restURL + userId,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newRecord)
    })
      .then((res) => {
        displayUploadStatus('Ваш результат загружен на сервер!');
      })
      .catch((res) => {
        displayUploadStatus('Не удалось загрузить ваш результат на сервер :-(');
      });
};

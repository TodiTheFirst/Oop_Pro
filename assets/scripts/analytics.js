const intervalId = setInterval(() => {
    console.log('Sending analytics data...')
}, 2000);

document.getElementById('stop-analytics-brn').addEventListener('click', () => {
    clearInterval(intervalId); // позволяет остановить интервал
  });
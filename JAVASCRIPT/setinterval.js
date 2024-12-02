let counter = 0;
const intervalId = setInterval(function() {
  console.log('Interval execution count:', counter);
  counter++;
  if (counter === 5) {
    clearInterval(intervalId); // Stop the interval after 5 executions
  }
}, 1000); // Executes every 1000 milliseconds (1 second)

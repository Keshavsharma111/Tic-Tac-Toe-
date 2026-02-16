let count = 0;

const intervalId = setInterval(() => {
  console.log("Keshav Sharma SDE");
  count++;

  if (count === 5) {
    clearInterval(intervalId);
    console.log("Task completed");
  }
}, 1000);
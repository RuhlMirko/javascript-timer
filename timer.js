let seconds = 0;
let timerInterval = null;

function startTimer() {
  if (timerInterval) return; // Prevent multiple intervals
  // style changes
  document.querySelector("#timeDisplay").style.color = "black";
  // logic changes
  timerInterval = setInterval(() => {
    seconds++;
    displayTime();
  }, 1000);
}

function pauseTimer() {
  // style changes
  document.querySelector("#timeDisplay").style.color = "#4141419f";
  //logic changes
  clearInterval(timerInterval);
  timerInterval = null;
}

function displayTime() {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  document.getElementById("timeDisplay").textContent = `${hrs}:${mins}:${secs}`;
}

// Variables
var startButton = document.getElementById('start');
var resetButton = document.getElementById('Reset');
var lapButton = document.getElementById('Lap');
var timeDisplay = document.getElementById('Time');
var lapList = document.getElementById('lap');
var sec = 0;
var interval;
var running = false;

// Update time display
function update() {
    var hours = Math.floor(sec / 3600);
    var minutes = Math.floor((sec % 3600) / 60);
    var seconds = sec % 60;

    timeDisplay.innerHTML = 
        (hours < 10 ? "0" + hours : hours) + ":" + 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);

    sec++;
}

// Start/Stop the timer
startButton.addEventListener('click', function () {
    if (!running) {
        interval = setInterval(update, 1000);
        startButton.innerHTML = "Stop";
    } else {
        clearInterval(interval);
        startButton.innerHTML = "Start";
    }
    running = !running;
});

// Reset the timer
resetButton.addEventListener('click', function () {
    clearInterval(interval);
    sec = 0;
    timeDisplay.innerHTML = '00:00:00';
    lapList.innerHTML = ''; // Clear laps
    running = false;
    startButton.innerHTML = "Start";
});

// Record lap time
lapButton.addEventListener('click', function () {
    if (running) {
        var lapTime = document.createElement('li');
        lapTime.textContent = timeDisplay.innerHTML;
        lapList.appendChild(lapTime);
    }
});

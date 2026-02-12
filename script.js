let timer = null;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateDisplay() {
    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');

    document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function runTimer() {
    seconds++;

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

function start() {
    if (timer !== null) return;   // prevent multiple timers
    timer = setInterval(runTimer, 1000);
}

function pause() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    pause();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (timer === null) return;

    let lapTime = document.getElementById("display").innerText;
    let lapCount = document.querySelectorAll("#laps li").length + 1;

    let li = document.createElement("li");
    li.innerText = `Lap ${lapCount}: ${lapTime}`;

    document.getElementById("laps").appendChild(li);
}
const clockDisplay = document.getElementById('clock');
const timerDisplay = document.getElementById('timer');
const clockViewBtn = document.getElementById('clockViewBtn');
const timerViewBtn = document.getElementById('timerViewBtn');
const timerValue = document.getElementById('timer-value');
const startTimerBtn = document.getElementById('start-timer');
const stopTimerBtn = document.getElementById('stop-timer');
const resetTimerBtn = document.getElementById('reset-timer');

let timerInterval;
let timerSeconds = 0;
let timerRunning = false;

function updateClock() {
    const day = new Date();
    const hours = String(day.getHours());
    const minutes = String(day.getMinutes());
    const seconds = String(day.getSeconds());
    clockDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerInterval = setInterval(() => {
            timerSeconds++;
            displayTimer();
        }, 1000);
        
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    timerSeconds = 0;
    displayTimer();
    stopTimer();
}

function displayTimer() {
    const h = (timerSeconds / 3600) | 0;
    const m = ((timerSeconds % 3600) / 60) | 0;
    const s = timerSeconds % 60;
    timerValue.innerHTML = `${h}:${m}:${s}`;
}


clockViewBtn.addEventListener('click', () => {
    clockDisplay.classList.remove('hidden');
    timerDisplay.classList.add('hidden');
});

timerViewBtn.addEventListener('click', () => {
    clockDisplay.classList.add('hidden');
    timerDisplay.classList.remove('hidden');
});

startTimerBtn.addEventListener('click', startTimer);
stopTimerBtn.addEventListener('click', stopTimer);
resetTimerBtn.addEventListener('click', resetTimer);

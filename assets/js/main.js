//pomodor app

var timerInterval;
var timeLeft = 25 * 60;
var stopButton = document.getElementById('stop');
var startButton = document.getElementById('start');

var learning = document.getElementById('learning');
var longBreak = document.getElementById('long-break');
var shortBreak = document.getElementById('break');

shortBreak.addEventListener('click', function() {
    timeLeft = 5 * 60;
    document.getElementById('timer').innerHTML = '5:00';
});


longBreak.addEventListener('click', function() {
    timeLeft = 15 * 60;
    document.getElementById('timer').innerHTML = '15:00';
});

learning.addEventListener('click', function() {
    timeLeft = 25 * 60;
    document.getElementById('timer').innerHTML = '25:00';
});

startButton.addEventListener('click', function() {
    startTimer();

    startButton.style.display = 'none';
    stopButton.style.display = 'inline-block';

});

stopButton.addEventListener('click', function() {
    stopTimer();
    
    stopButton.style.display = 'none';
    startButton.style.display = 'inline-block';
});



//Functions
function startTimer() {
    timerInterval = setInterval(updateTime, 1000);
}


function updateTime() {
    timeLeft--;
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    document.getElementById('timer').innerHTML = minutes + ':' + seconds;
    if (timeLeft == 0) {
        clearInterval(timerInterval);
        alert('Time is up!');
    }
}

function stopTimer() {
    clearInterval(timerInterval);
}



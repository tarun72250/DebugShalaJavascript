const timer = document.getElementById("stopWatch");

var hr = 0;
var min = 0;
var sec = 0;

var stopTime = true;

function startTimer() {
    if (stopTime == true) {
        stopTime = false;
        timerCycle()
    }
}

function stopTimer() {
    if (stopTime == false) {
        stopTime = true;
    }
}

function timerCycle() {
    if (stopTime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        //if sec , min , and hr are < 10 . so these are in single minutes  so add 0 to them 

        if (sec < 10) {
            sec = "0" + sec;
        }

        if (min < 10) {
            min = "0" + min;
        }

        if (hr < 10) {
            hr = "0" + hr;
        }

        timer.innerHTML = hr + " : " + min + " : " + sec;
        setTimeout(timerCycle, 1000)
    }
}

function resetTimer() {
    //time will be reset
    timer.innerHTML = "00:00:00";
    stopTime = true;
    hr = 0;
    sec = 0;
    min = 0;
}
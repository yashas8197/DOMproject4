const start = document.querySelector('#startStopBtn');
const reset = document.querySelector('#resetBtn');

//variables for time

let seconds = 0;
let minutes = 0;
let hours = 0;

//leading variables for zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// variables for setInterval and timer status

let timerInterval = null;
let timerStatus = "stopped";

//function for stop watch

function stopWatch(){
    seconds++
if(seconds / 60 === 1){
    minutes++ ; 
    seconds = 0;
    if(minutes / 60 === 1){
        hours++ ;
        minutes = 0;
    }
}
    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if(hours < 10){
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }


let displayTimer = document.querySelector('#timer')
displayTimer.innerHTML = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// window.setInterval(stopWatch , 1);

let startStopBtn = document.querySelector('#startStopBtn');

startStopBtn.addEventListener('click', () => {
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa fa-pause" aria-hidden="true" id="pause"></i>`
        timerStatus = "started"
    }
    else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa fa-play" aria-hidden="true" id="play"></i>`
        timerStatus = "stopped"

    }
});

resetBtn.addEventListener('click' ,() => {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.querySelector('#startStopBtn').innerHTML = `<i class="fa fa-play" aria-hidden="true" id="play"></i>`
    document.querySelector('#timer').innerHTML = "00:00:00"

})


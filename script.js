const start = document.querySelector('#startStopBtn');
const reset = document.querySelector('#resetBtn');

//variables for time

let seconds = 0;
let minutes = 0;
let hours = 0;

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
let displayTimer = document.querySelector('#timer')
displayTimer.innerHTML = hours + ":" + minutes + ":" + seconds;
}

window.setInterval(stopWatch , 1000);

"use strict";

let minute = 0;
let second = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
  }
  
  function pause() {
    clearInterval(cron);
  }
  
  function reset() {
    minute = 0;
    second = 0;
    document.getElementById('minute').innerText = '25';
    document.getElementById('second').innerText = '00';
  }

  function timer() {

    if (second == 60) {
      second = 0;
      minute--;
    }
    if (minute == 60) {
      minute = 0;
      hour--;
    }
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
  }
  
  function returnData(input) {
    return input > 10 ? input : `0${input}`
  }


  {  // to isolate the scope of your code from any existing code.
    const TICK_RESOLUTION = 1000; // in ms
    const TIMER_LENGTH = 10;      // multiples of TICK_RESOLUTION
    startBtn.value = TIMER_LENGTH * TICK_RESOLUTION;
    
    startBtn.addEventListener("click", startStopTimer);
    stopBtn.addEventListener("click", startStopTimer);
    document.addEventListener("visibilityChange", tick);
    
    let endTime, timeHdl;
    function startStopTimer(event) {
        endTime = performance.now() + Number(event.target.value);        
        tick();
    }
    function tick() {
        clearTimeout(timeHdl);
        var till = endTime - performance.now();
        till = till <= 0 ? 0 : till;                
        if (till) {
            if (document.visibilityState === "visible") {
                stopBtn.disabled = false;
                timeEl.textContent = (till / TICK_RESOLUTION + 1 | 0);
            }
            timeEl.dateTime = "PT0H0M" + (till / TICK_RESOLUTION + 1 | 0) + "S";
            timeHdl = setTimeout(tick, (till % TICK_RESOLUTION) + 10);
        } else {
            timeEl.dateTime = "PT0H0M0S";
            timeEl.textContent = 0;
            stopBtn.disabled = true;
        }
    }
}
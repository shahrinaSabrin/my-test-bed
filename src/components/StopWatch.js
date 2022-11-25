import React from "react";


let seconds=0;
let millisecond=0;
let interval;
let m_sec = document.getElementById("ms");
let second= document.getElementById("sec");

let button_start= document.getElementById("button-start");
let button_stop= document.getElementById("button-stop");
let button_reset= document.getElementById("button-reset");


const startTimer = ()=>{
			millisecond++;

			if(millisecond <= 9){
				m_sec.innerHTML = "0" + millisecond;
			}
			if (millisecond > 9){
				m_sec.innerHTML = millisecond;
			} 
			if(millisecond>99){
				seconds++;
				second.innerHTML= "0"+seconds;
				millisecond=0;
				m_sec.innerHTML="0"+0;
			}
			if (seconds > 9){
				second.innerHTML = seconds;
			}
			
}

	

	button_start.onclick= function(){
			clearInterval(interval);
     interval = setInterval(startTimer, 10);
		}

		button_stop.onclick= function(){
			clearInterval(interval);
		}

		button_reset.onclick = function() {
			clearInterval(interval);
		 millisecond = "00";
		 seconds = "00";
		 m_sec.innerHTML = millisecond;
		 second.innerHTML = seconds;
	 }
	


function StopWatch() {
  return (
    <div className="stopwatch">
      <h1>StopWatch</h1>
			<p><span id="sec">00</span> : <span id="ms">00</span></p>
      <div className="button_container">
        <button id="button-start" >Start</button>&nbsp;&nbsp;&nbsp;
        <button id="button-stop">Stop</button>&nbsp;&nbsp;&nbsp;
        <button id="button-reset">Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;

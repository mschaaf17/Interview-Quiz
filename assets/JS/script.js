var timerEl = document.getElementById('time-sec');
var startBtn = document.createElement("button");



startBtn.textContent = "Start Quiz";
document.body.appendChild(startBtn);

var instruction = document.getElementById('instruction').setAttribute('value','JavaScript Quiz');

startBtn.addEventListener("click", function(event){
  var startQuizBtn = event.target;
    if (startQuizBtn) {  
        timer(); 
    }
    console.log(startQuizBtn);
});






function timer() {
var timeLeft = 60;
var countInterval = setInterval (function() {
    if (timeLeft === 0) {
        clearInterval(countInterval);
        timerEl.textContent = 'Times out';
    }
    else {
        timerEl.textContent = timeLeft;
        timeLeft--;
    };
}, 1000);
}



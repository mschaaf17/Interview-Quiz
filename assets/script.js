var timerEl = document.getElementById('time-sec');
//the time is shown in the header as a count down clock
//I click on an answer to the question
//if the answer is correct, more time is added and I go to the next question
    //points should be added to my score everytime I get the answer correct
//else if the is wrong, time is decreased and I go to the next question..loop?
function timer() {
var timeLeft = 60;
var countInterval = setInterval (function() {
    if (timeLeft === 0) {
        clearInterval(countInterval);
        timerEl.textContent = '';
    }
    else if (timeLeft < 5) {
        timerEl.textContent('.red') = timeLeft;
        timeLeft--;
    }
    else {
        timerEl.textContent = timeLeft;
        timeLeft--;
    }
}, 1000);
}
timer();
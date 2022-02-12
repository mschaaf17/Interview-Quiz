var timerEl = document.getElementById('time-sec');
var startBtn = document.createElement("button");


//start button 
startBtn.textContent = "Start Quiz";
document.body.appendChild(startBtn);


//displays instructions for quiz

var information = document.getElementById('information');
var moreInfo = document.getElementById('more-info');
var instructions = 'Please click the button to continue';
var infoOnInstructions = 'Read carefully';
information.textContent = instructions;
moreInfo.textContent = infoOnInstructions;


//quiz questions
var question1 = 'What is the answer?'
var choices1= 'yaya!'


//starts the timer by clicking start button
startBtn.addEventListener("click", function(event){
  var startQuizBtn = event.target;
  var quizInterval = setInterval(function() {
    if (startQuizBtn) {  
        //clear instructions
        clearInterval(quizInterval);
        information.textContent= question1;
        moreInfo.textContent = choices1;
        clearInterval(startBtn);
        startBtn.textContent = "";
        timer(); 
        console.log(startQuizBtn);
    }
}, 1000);
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



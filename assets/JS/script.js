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
var listEl = document.createElement("ol");

//answers for first question
var li1 = document.createElement("li");
li1.textContent= 'fine';
li1.textContent ='yas!';
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

//append ordered list

//append the list
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);


//starts the timer by clicking start button
startBtn.addEventListener("click", function(event){
  var startQuizBtn = event.target;
  var quizInterval = setInterval(function() {
    if (startQuizBtn) {  
        //clear instructions
        clearInterval(quizInterval);
        information.textContent= question1;
        moreInfo.textContent = "";
        clearInterval(startBtn);
        startBtn.setAttribute("style", "display:none");
        choices.appendChild(listEl);
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



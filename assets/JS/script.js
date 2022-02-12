var timerEl = document.getElementById('time-sec');
var startBtn = document.createElement("button");
var results = document.getElementById('results');
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question');
const answerButtonsEl = document.getElementById('answer-buttons');
let shuffledQuestions, currentQuestionIndex

//start button 
startBtn.textContent = "Start Quiz";
document.body.appendChild(startBtn);


//displays instructions for quiz
var instructions = 'Please click the button to continue';
var infoOnInstructions = 'Read carefully';
questionEl.textContent = instructions;
questionContainerEl.textContent = infoOnInstructions;


/*var listEl = document.createElement("ol");
//answers for first question
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
//append the list
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
*/


//starts the timer by clicking start button
startBtn.addEventListener("click", startGame)
function startGame() {
    console.log('started')
    startBtn.setAttribute("style", "display: none");
    shuffledQuestions = quizQues.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerEl.textContent ="";
    timer();
    setNextQuestion()
    
}



//timer function
var timeLeft = 60;
function timer() {
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

//setting next questions
function setNextQuestion() {
//resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
questionEl.innerText = question.question
question.answer.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    listEl.appendChild(button)
})
}


//selecting answer

function selectAnswer(e) {

}
/*
function resetState() {
    nextButton.classList.add('hide')
    while(answerButtonsEl,firstChild) {
        answerButtonsEl.removeChild
        (answerButtonsEl.firstChild)
    }
}*/



//quiz questions
const quizQues = [
    {
question: 'What is 2+2?',
answers: [ 
    {text: '4', correct: true},
    {text: '22', correct: false}
]
    }
]





/*listEl.addEventListener("click", function(event){
    var choices = event.target;
    console.log(choices);
        if (choices === li1) {
         timeLeft  = timeLeft + 10; 
         timeLeft ++;
        }
        else {
            timeLeft = timeLeft - 10;
            timeLeft--;
        }
}) */

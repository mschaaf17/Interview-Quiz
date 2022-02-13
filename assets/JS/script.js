var timerEl = document.getElementById('time-sec');
var startBtn = document.getElementById("start-button");
var results = document.getElementById('results');
var directions = document.getElementById('directions');
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question');
const answerButtonsEl = document.getElementById('answer-buttons');
var shuffledQuestions, currentQuestionIndex

//start button 



//displays instructions for quiz
questionEl.textContent = 'Please click the button to continue;'
directions.textContent = 'Read carefully';
answerButtonsEl.setAttribute("style", "display: none");


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
    directions.textContent ="";
    answerButtonsEl.setAttribute("style", "display: visible")
    timer();
    setNextQuestion();
    
}

//timer function
var timeLeft = 60;
function timer() {
var countInterval = setInterval (function() {
    if (timeLeft === 0) {
        clearInterval(countInterval);
        timerEl.textContent = 'Times out';
        window.location.href="./question1.html";
    }
    else {
        timerEl.textContent = timeLeft;
        timeLeft--;
    };
}, 1000);
}

//setting next questions
function setNextQuestion() {
resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
questionEl.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsEl.appendChild(button)
})
}

function resetState() {
    //nextButton.classList.add('hide')
    while(answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild
        (answerButtonsEl.firstChild)
    }
}


//selecting answer

function selectAnswer(event) {
const selectedButton = event.target;
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
if(shuffledQuestions.length > currentQuestionIndex + 1) {
    window.location.href="./question1.html";
}
}

function setStatusClass(element, correct) {
 //   clearStatusClass(element)
    if(correct) {
        timeLeft  = timeLeft + 10; 
         timeLeft ++;
    } 
    else {
        timeLeft = timeLeft - 10;
            timeLeft--;
    }
    if (timeLeft === 0) {
        window.location.href="./question1.html";
    }
    
}

//quiz questions
const quizQues = [
    {
question: 'What is 2+2?',
answers: [ 
    {text: '4', correct: true},
    {text: '22', correct: false}
]
    },
    {
        question: 'String values must be enclosed within____ when being assigned to variable.',
        answers: [
            {text: 'commas', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'quotes', correct: true},
            {text: 'parenthesis', correct: false}
        ]
    }
    
]



//info for high scores page
var initalsInput = document.querySelector('#initals-input');
var logScoreButton = document.querySelector('#log-score-btn')

logScoreButton.addEventListenter("click", logScore) 
    function logScore() {
    console.log(logScoreButton);
    var initals = initalsInput.value.trim();

localStorage.setItem("UserInitials", JSON.stringify (initals));
};

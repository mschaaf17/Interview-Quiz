var timerEl = document.getElementById('time-sec');
var startBtn = document.getElementById("start-button");
var scoreText = document.querySelector('#score');
var directions = document.getElementById('directions');
var questionEl = document.getElementById('question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
const listEl = document.querySelector('.listEl');

var currentQuestion= {}
var acceptingAnswers = true
var score = 0 
var questionContainer = 0
var availableQuestion = []



//var shuffledQuestions, currentQuestionIndex

//start button 



//displays instructions for quiz



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

    
function startGame() {
    score = 0;
    availableQuestion = [...questions]
    setNextQuestion();
    timer();
}

//timer function
var timeLeft = 60;
function timer() {
var countInterval = setInterval (function() {
    if (timeLeft === 0) {
        clearInterval(countInterval);
        timerEl.textContent = 'Times out';
        window.location.href="./scores.html";
    }
    else {
        timerEl.textContent = timeLeft;
        timeLeft--;
    };
}, 1000);
}

setNextQuestion = () => {
if(availableQuestion.length === 0) {
    localStorage.setItem('mostRecentScore', timeLeft)
    return window.location.assign('./scores.html')
}
const questionIndex = Math.floor(Math.random() * availableQuestion.length)
currentQuestion = availableQuestion[questionIndex]
question.innerText = currentQuestion.question
choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
})
availableQuestion.splice(questionIndex, 1)
acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener("click", event => {
        if(!acceptingAnswers) return
        acceptingAnswers = false
        const selectedChoice = event.target
        const selectedAnswer = selectedChoice.dataset['number']
    })
    
    });
     

//end
//quiz questions
var questions = [
    {
question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
choice1: 'JavaScript',
choice2: 'terminal/Bash',
choice3: 'for loops',
choice4: 'console.log',
answer: 2,
    },
    {
        question: 'String values must be enclosed within ____ when being assigned to variables,',
        choice1: 'commas',
        choice2: 'curly brackets',
        choice3: 'quotes',
        choice4: 'parenthesis',
        answer: 3,
            },
            {
                question: 'JavaScript file has an extension of:',
                choice1: '.Java',
                choice2: '.Js',
                choice3: '.javascript',
                choice4: '.xml',
                answer: 2,
                    }
                ]
const SCORE_POINTS = 100
const MAX_QUESTIONS = 3

startGame()
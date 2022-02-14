var timerEl = document.querySelector('.time-sec');
var questionEl = document.getElementById('question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
const listEl = document.querySelector('.listEl');
var score = document.querySelector('#yourScore');

var currentQuestion= {}
var acceptingAnswers = true
var availableQuestion = []

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

const MAX_QUESTIONS = 3

//starts the timer by clicking start button

    
function startGame() {
    availableQuestion = [...questions]
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
        window.location.href="./scores.html";
        localStorage.setItem('yourScore', JSON.stringify (timeLeft))
        return window.location.assign('./scores.html')
        
        
    }
    else {
        timerEl.textContent = timeLeft;
        timeLeft--;
    };
}, 1000);
}

function setNextQuestion() {
if(availableQuestion.length === 0) {
    localStorage.setItem('yourScore', JSON.stringify (timeLeft))
    return window.location.assign('./scores.html')
}
const questionIndex = Math.floor(Math.random() * availableQuestion.length)
currentQuestion = availableQuestion[questionIndex]
questionEl.innerText = currentQuestion.question
choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
})
availableQuestion.splice(questionIndex, 1)
acceptingAnswers = true
}

choiceOptions = Array.from(document.querySelectorAll('.choice-container')) 
choiceOptions.forEach(choice => {
    choice.addEventListener('click', e => {
        
        if(!acceptingAnswers) return

        acceptingAnswers = false
        let selectedChoice;
        if(e.target.dataset.number) {
            selectedChoice = e.target;
        } else {
            selectedChoice = e.target.children[1]
        }
        
        var selectedAnswer = selectedChoice.dataset['number']

        var currentAnswer = currentQuestion.answer 
        console.log(selectedAnswer, currentAnswer)

        
        if(selectedAnswer == currentQuestion.answer) {
        timeLeft  = timeLeft + 10;
        }
        else  {
            timeLeft = timeLeft - 10;
        }
        setNextQuestion();
    })

})

     

//end


startGame()
//var submitInitialsBtn = document.querySelector('#log-initials-btn');



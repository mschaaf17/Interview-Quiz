var timerEl = document.getElementById('time-sec');
var questionEl = document.getElementById('question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
const listEl = document.querySelector('.listEl');

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

function setNextQuestion() {
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
        
        const selectedAnswer = selectedChoice.dataset['number']

        var currentAnswer = currentQuestion.answer 
        console.log(selectedAnswer, currentAnswer)

        if(e.target = questions.answer) {
            timerEl = timerEl + 10;
        }
        setNextQuestion();
    })

})

     

//end
//quiz questions


startGame()
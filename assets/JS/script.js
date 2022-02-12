var timerEl = document.getElementById('time-sec');
var startBtn = document.createElement("button");
var results = document.getElementById('results');
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question');
const answerButtonsEl = document.getElementById('answer-buttons');
var shuffledQuestions, currentQuestionIndex

//start button 
startBtn.textContent = "Start Quiz";
document.body.appendChild(startBtn);


//displays instructions for quiz
var instructions = 'Please click the button to continue';
var infoOnInstructions = 'Read carefully';
questionEl.textContent = instructions;
questionContainerEl.textContent = infoOnInstructions;
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
    questionContainerEl.textContent ="";
    answerButtonsEl.setAttribute("style", "display: visible")
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
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {}



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



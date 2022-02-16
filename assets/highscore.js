var submitInitialsBtn = document.querySelector('#log-initials-btn')
var userInput = document.querySelector('#initials-input')
var finalScore = document.querySelector('#yourScore')

var highScores = JSON.parse(localStorage.getItem('highScores'))|| []
var orderLi = document.createElement("ol");

for(i=0; i < highScores.length; i++) {
   var listElement = document.createElement("li");
   listElement.textContent = highScores[i].userInitials + ": " + highScores[i].score; 
   orderLi.appendChild(listElement);
}
document.body.appendChild(orderLi);

finalScore.textContent = localStorage.getItem('yourScore', JSON.stringify (timeLeft));



submitInitialsBtn.addEventListener("click", function() {
    //event.preventDefault()
    var userStats = {
        userInitials: userInput.value.trim(),
        score: localStorage.getItem('yourScore', JSON.stringify (timeLeft))
    }
    highScores.push(userStats)

localStorage.setItem('highScores', JSON.stringify(highScores));




});


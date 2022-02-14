var submitInitialsBtn = document.querySelector('#log-initials-btn')
var userInput = document.querySelector('#initials-input')
var finalScore = document.querySelector('#yourScore')

finalScore.textContent = localStorage.getItem('yourScore', JSON.stringify (timeLeft));



submitInitialsBtn.addEventListener("click", function(event) {
    event.preventDefault()
    var userStats = {
        userInitials: userInput.value.trim(),
        score: localStorage.getItem('yourScore', JSON.stringify (timeLeft))
    }
    

localStorage.setItem('userInfo', JSON.stringify(userStats));

});

var scoresList 
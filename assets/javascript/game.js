var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessed = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function numGuessLeft() {
    document.querySelector("#guessesleft").innerHTML = "Guesses Left: " + guessesLeft;
}

numGuessLeft();

document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase();
    guessesLeft--;
    guessed.push(userInput);
    numGuessLeft();
if (computerGuess === userInput) {
    alert("Wow, you're smart")
    wins++
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}
else if (guessesLeft === 0) {
    alert("Wow, you're not that smart")
    losses++
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}


}


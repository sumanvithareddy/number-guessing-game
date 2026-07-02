function playGame() {

    let secretNumber = 7;

    let guess = prompt("Guess a number between 1 and 10");

    if (guess === null) {
        document.getElementById("result").innerHTML = "Game Cancelled!";
    }
    else if (guess == secretNumber) {
        document.getElementById("result").innerHTML =
        "🎉 Congratulations! You guessed the correct number.";
    }
    else if (guess < secretNumber) {
        document.getElementById("result").innerHTML =
        "📉 Too Low! The correct number is " + secretNumber;
    }
    else {
        document.getElementById("result").innerHTML =
        "📈 Too High! The correct number is " + secretNumber;
    }

}

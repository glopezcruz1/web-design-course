function startGame() {
    let number = Math.floor(Math.random() * 10) + 1;
    let attempts = 3;

    for (let i = 1; i <= attempts; i++) {
    let guess = Number(prompt("Attempt " + i + ": Guess a number from 1 to 10"));

    if (guess === number) {
        alert("You guessed it!");
        return;
    } else if (guess > number) {
        alert("Too high");
    } else {
        alert("Too low");
    }
  }
    alert("Game Over. The number was " + number);
}
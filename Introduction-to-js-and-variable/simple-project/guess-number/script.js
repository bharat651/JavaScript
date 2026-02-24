let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomValue = Math.ceil(Math.random() * 100)

function checkGuess() {
    let inputValue = userInput.value;
    let lowText = "Too low number";
    let highText = "Too high number";
    if (parseInt(inputValue) > randomValue) {
        gameResult.textContent = highText;
    } else if (parseInt(inputValue) === randomValue) {
        gameResult.textContent = "right answer"
    } else {
        gameResult.textContent = lowText;
    }
}
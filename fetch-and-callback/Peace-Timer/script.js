let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");
let uniqueId;
twentySecondsBtn.onclick = function() {

    let count = 20
    clearInterval(uniqueId)
   timerText.textContent = count + " seconds left"
    uniqueId = setInterval(function() {
        count = count - 1
        timerText.textContent = count + " seconds left"
        if (count === 0) {
            
            clearInterval(uniqueId)
            timerText.textContent = "Your moment is complete"
        }
    }, 1000)
}

thirtySecondsBtn.onclick = function() {
    let count = 30
    clearInterval(uniqueId)
    timerText.textContent = count + " seconds left"
    uniqueId = setInterval(function() {
        count = count - 1
        timerText.textContent = count + " seconds left"
        if (count === 0) {
            
            clearInterval(uniqueId)
            timerText.textContent = "Your moment is complete"
        }
    }, 1000)
}

fortySecondsBtn.onclick = function() {
    let count = 40
    clearInterval(uniqueId)
  timerText.textContent = count + " seconds left"
    uniqueId = setInterval(function() {
        count = count - 1
        timerText.textContent = count + " seconds left"
        if (count === 0) {
            
            clearInterval(uniqueId)
            timerText.textContent = "Your moment is complete"
        }
    }, 1000)
}

oneMinuteBtn.onclick = function() {
    let count = 60
    clearInterval(uniqueId)
   timerText.textContent = count + " seconds left"
    uniqueId = setInterval(function() {
        count = count - 1
        timerText.textContent = count + " seconds left"
        if (count === 0) {
            
            clearInterval(uniqueId)
            timerText.textContent = "Your moment is complete"
        }
    }, 1000)
}
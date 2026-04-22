let fromUserInput = document.getElementById("fromUserInput")
let toUserInput = document.getElementById("toUserInput")
let counterText = document.getElementById("counterText")
let startBtn = document.getElementById("startBtn")
startBtn.onclick = function() {
    let start = parseInt(fromUserInput.value)
    let end = parseInt(toUserInput.value)
    let counter = start
    counterText.textContent = counter
    if (fromUserInput.value !== "" && toUserInput.value !== "" && start < end) {
        let uniqueId = setInterval(function() {
            counterText.textContent = counter
            if (counter === end) {
                clearInterval(uniqueId)
            }
            counter = counter + 1

        }, 1000)
    } else if (fromUserInput.value === "") {
        alert("Enter the from value")
        return
    } else if (toUserInput.value === "") {
        alert("Enter the to value")
        return
    }
}
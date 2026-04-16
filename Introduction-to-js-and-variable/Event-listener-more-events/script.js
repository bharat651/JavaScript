let timerElement = document.getElementById("timer")
let defuseElement = document.getElementById("defuser")
let countNumber = 10
let intervalId = setInterval(function(){
    countNumber = countNumber - 1;
    timerElement.textContent = countNumber
    if(countNumber === 0){
        timerElement.textContent="BOOM"
        clearInterval(intervalId)
    }
},1000)
defuseElement.addEventListener("keydown",function(event){
    let defuseText = defuseElement.value
    if(countNumber !== 0 && event.key ==="Enter" && defuseText ==="defuse"){
        clearInterval(intervalId)
        timerElement.textContent="Defuse"
    }
})


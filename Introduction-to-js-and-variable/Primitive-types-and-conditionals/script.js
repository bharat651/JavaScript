let counterElement = document.getElementById("number");
function decreaseBtn(){
    let previousCounter=counterElement.textContent;
    let updateCounter= parseInt(previousCounter) - 1;
    document.getElementById("number").textContent=updateCounter;
    if(updateCounter<0){
        document.getElementById("number").style.color="Red"
    }
}

function resetBtn(){
    let updateCounter=0
    document.getElementById("number").textContent=updateCounter;
    if(updateCounter===0){
        document.getElementById("number").style.color="Black"
    }
}

function increaseBtn(){
    let previousCounter=counterElement.textContent;
    let updateCounter = parseInt(previousCounter) +1;
    document.getElementById("number").textContent=updateCounter
    if(updateCounter>0){
        document.getElementById("number").style.color="Green"
    }
}
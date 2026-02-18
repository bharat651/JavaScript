function switchedOff() {
    document.getElementById("blubImage").src =
        "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switch Off"
    document.getElementById("switchOff").style.backgroundColor = "#22c55e"
    document.getElementById("switchOn").style.backgroundColor = "#cbd2d9"
}

function switchedOn() {
    document.getElementById("blubImage").src =
        "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent = "Switch On"
    document.getElementById("switchOff").style.backgroundColor = "#e12d39"
    document.getElementById("switchOn").style.backgroundColor = "#22c55e"
}
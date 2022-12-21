let points = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function homePlus1() {
    points = points + 1
    homeScore.textContent = points
}

function homePlus2() {
    points = points + 2
    homeScore.textContent = points
}

function homePlus3() {
    points = points + 3
    homeScore.textContent = points
}

function guestPlus1() {
    points = points + 1
    guestScore.textContent = points
}

function guestPlus2() {
    points = points + 2
    guestScore.textContent = points
}

function guestPlus3() {
    points = points + 3
    guestScore.textContent = points
}
var current = "red"
var offCurrent = "blue"
var play = true

function setup() {
    var tics = document.getElementsByClassName("tic")
    for (var i = 0; i < tics.length; i++) {
        tics[i].addEventListener("click", function() {
            changeColor(this)
        })
    }
}

function changeColor(box) {
    if (box.getAttribute("color") == "white" && play) {
        box.setAttribute("color", current)
        let temp = current
        current = offCurrent
        offCurrent = temp
    }
    if(checkBox()){
        reset()        
    }
    if (checkGameWon()) {
        var textWin = document.getElementById(`win`)
        textWin.setAttribute("color", `${offCurrent}`)
        textWin.setAttribute("visible", "true")
        console.log(`winner = ${offCurrent}`)
        play = false
    }

}

function checkGameWon() {
    var box1 = document.getElementById(`box1`)
    var box2 = document.getElementById(`box2`)
    var box3 = document.getElementById(`box3`)
    var box4 = document.getElementById(`box4`)
    var box5 = document.getElementById(`box5`)
    var box6 = document.getElementById(`box6`)
    var box7 = document.getElementById(`box7`)
    var box8 = document.getElementById(`box8`)
    var box9 = document.getElementById(`box9`)

    return ((box1.getAttribute("color") == box2.getAttribute("color") && box1.getAttribute("color") == box3.getAttribute("color") && (box1.getAttribute("color") != "white")) ||
        (box4.getAttribute("color") == box5.getAttribute("color") && box4.getAttribute("color") == box6.getAttribute("color") && (box4.getAttribute("color") != "white")) ||
        (box7.getAttribute("color") == box8.getAttribute("color") && box7.getAttribute("color") == box9.getAttribute("color") && (box7.getAttribute("color") != "white")) ||
        (box1.getAttribute("color") == box4.getAttribute("color") && box1.getAttribute("color") == box7.getAttribute("color") && (box1.getAttribute("color") != "white")) ||
        (box2.getAttribute("color") == box5.getAttribute("color") && box2.getAttribute("color") == box8.getAttribute("color") && (box2.getAttribute("color") != "white")) ||
        (box3.getAttribute("color") == box6.getAttribute("color") && box3.getAttribute("color") == box9.getAttribute("color") && (box3.getAttribute("color") != "white")) ||
        (box1.getAttribute("color") == box5.getAttribute("color") && box1.getAttribute("color") == box9.getAttribute("color") && (box1.getAttribute("color") != "white")) ||
        (box3.getAttribute("color") == box5.getAttribute("color") && box3.getAttribute("color") == box7.getAttribute("color") && (box3.getAttribute("color") != "white")))
}

function reset() {
    var t = document.getElementById("win")
    t.setAttribute("visible", false)
    t.setAttribute("color", "white")

    var tics = document.getElementsByClassName("tic")
    for (var i = 0; i < tics.length; i++) {
        tics[i].setAttribute("color", "white")
    }

    play = true
}

function checkBox(){
    var tics = document.getElementsByClassName("tic")
    for (var i = 0; i < tics.length; i++) {
        if(tics[i].getAttribute("color") == "white"){
            return false;
        }
    }
    return true;
}
function setup() {
    createCanvas(windowWidth, windowHeight)
    background("grey")
}

function draw() {
    clear()
    background('grey')
    /*
    if (mouseIsPressed){
    fill("purple")
    stroke("purple")
    ellipse(mouseX,mouseY, 10)
    // ellipse(100, 105, 10)
    }
    */
    if (mouseIsPressed) {
        line(0, 0, mouseX, mouseY)
        line(0, windowHeight, mouseX, mouseY)
        line(windowWidth, windowHeight, mouseX, mouseY)
        line(windowWidth, 0, mouseX, mouseY)
        line(windowWidth / 2, 0, mouseX, mouseY)
        line(0, windowHeight / 2, mouseX, mouseY)
        line(windowWidth / 2, windowHeight, mouseX, mouseY)
        line(windowWidth, windowHeight / 2, mouseX, mouseY)
    }

}

//previous functions: mousePressed, preload, setup, draw

//functions have four parts: 
//Name
//Input/Parameters
//Code
//Output

function throwMarker(person, color, landingPosition){
    var binPosition = 100
    //if the landing positon matches the bin position, the function should return congratulatory message
    if(landingPosition == binPosition){
        //return "Yay, " + person + " made the " + color + " marker in the bin!"
        return `Yay, ${person} made the ${color} marker in the bin!`
    }
    else if(landingPosition > binPosition){
        return `Sorry, ${person} failed to throw the ${color} marker in the bin by overshooting`
    }
    return `Sorry, ${person} failed to throw the ${color} marker in the bin by undershooting`
}

//interpolation is when you plug variables into a string

console.log(throwMarker("Liz","green",100))
console.log(throwMarker("Marley","red"))

//type node script.js in terminal to run this function
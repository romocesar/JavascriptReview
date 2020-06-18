//This script demonstrates the functioning of:
// prompt
// alert
// variables
// conditional statements

//Declaration of variables
var yourName = prompt("Part 1: What is your name?");

//Declaration of selection of elements
if(!yourName || 0 === yourName.length){
    alert("Please refresh and enter your name on Part 1 prompt");
}
else{    
    document.getElementById("sayHello").innerHTML = "Hi, " + yourName;
}

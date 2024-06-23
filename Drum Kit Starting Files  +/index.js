//detecting keryboard press

var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function (){
   
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
   
    buttonAnimation(buttonInnerHTML);
});

}


//detecting keryboard press

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key) {

switch(key) {
    case "Sa":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "Re":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "Ga":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "Ma":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "Pa":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "Dha":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    case "Ni":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "Sa":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    
    default: console.log(buttonInnerHTML);
}
}

function buttonAnimation(currentKey){
   var activeButton = document.querySelector("." + currentKey);

   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 100);
}




/*var audio = new Audio("sounds/tom-1.mp3");
audio.play();*/

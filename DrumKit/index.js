
var drums = document.querySelectorAll(".drum").length;

for(i=0; i<drums; i++){

   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       
       var letter = this.innerHTML;
       music(letter);
} )};
// listens to the clicks

function player(filename){
    let audio = new Audio(filename);
    audio.play();
}
// Gets the required files

function keyboard(){
    document.addEventListener("keypress", function(event){
    music(event.key);
    }
)};
// Listens to the keypresses

function music(instrument){
    switch(instrument){
        case "W":
           player("sounds/crash.mp3");
       case "a":
           player("sounds/kick-bass.mp3");s
       case "s":
           player("sounds/snare.mp3");
       case "d":
           player("sounds/tom-1.mp3");
       case "j":
           player("sounds/tom-2.mp3");
       case "k":
           player("sounds/tom-3.mp3");
       case "l":
           player("sounds/tom-4.mp3");
        }
}

// plays the musics


keyboard();





function player(filename){
    let audio = new Audio(filename);
    audio.play();
}

var drums = document.querySelectorAll(".drum").length;

for(i=0; i<drums; i++){

   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       
       console.log(this.innerHTML);
       switch(this.innerHTML){
         case "w":
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

   });

}   



// var audio = new Audio("sounds/tom-1.mp3");
//        audio.play();
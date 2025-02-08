
var drums = document.querySelectorAll(".drum").length;

for(i=0; i<drums; i++){

   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       
    alert("I got clicked");

   });

}


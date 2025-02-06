
function Random(){
    let randomInt = Math.floor(Math.random() * 5) + 1;
    return randomInt;
};



function DicePic(){
    let dicearray = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
    document.getElementById("img1").src = "images/"+dicearray[Random()];
    document.getElementById("img2").src = "images/"+dicearray[Random()];
};





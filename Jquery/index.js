
$("h1").css("color", "red");

let text = 'Some random text to manipulate';

$("button").click(function(){
    console.log("event click");
     $("button").html("<h1>this is the moment</h1>");
});


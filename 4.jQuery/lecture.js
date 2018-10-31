// DOC? What's this?
// Document Object Model


//console.dir(document);
//document.title="ZOINKS!!"
// console.log(document.getElementsByTagName("h1"));
//document.getElementsByTagName("h1")[0].innerText="Hello Javascript";


//How does Jquery fit in?

//$("h1").text("Hello Javascript");

//console.log($("h1").text("Hello JS"));

//var btn=document.getElementById("btn");
//btn.addEventListener("click", function(){
 //   alert("Hello");
//})


//$("h1").fadeOut();

//$("button").click(function(){
   // $("h1").fadeOut();

//})

//console.log(document.body);

//var body = document.body;
// this is more fun if it's a random page with stuff already on it (like the learning platform for example).
//body. innerHTML = "Hello World";

//var bod = document.body;
//for (var i = 0; i < 10; i ++){
 // bod. innerHTML += "<p>This has gone through the loop completely: " +i+ " times</p>";
//}

//var paragraphs = document.getElementsByTagName('p');
//console.log(paragraphs);
//for (var i = 0; i < paragraphs.length; i ++){
  //console.log(paragraphs[i].addEventListener);
  //paragraphs[i].addEventListener('click', function(){
  //  this.style.background='blue';
  //});
//}



// Why use objects 
// HOw do we use them 

var person= ["todd", 34, "kenmore", function(){console.log("Hello")}, true];
var person  = {
  name: "todd",
  age: 34,
  location: "kenmore",
  ability: function(){console.log("Helo")},
  canDrive: true
}

console.log(person.name);

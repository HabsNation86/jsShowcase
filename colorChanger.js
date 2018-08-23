let clicker = document.querySelector("button");
let isPurple = false;

// clicker.addEventListener("click", function (){
// // if white make purple
// if (isPurple){
//   document.body.style.background = "white";
//   isPurple= false;
// }
// else {

//   document.body.style.background = "purple";
//   isPurple = true;
//   }
// } );


// This is refactored version of above code

clicker.addEventListener("click", function(){
  document.body.classList.toggle("purple");
});
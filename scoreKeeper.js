
let p1Button = document.querySelector("#p1");
let p2Button = document.querySelector("#p2");
let p1Display = document.querySelector("#p1Display");
let p1Score = 0;

console.log(p1Display);

p1Button.addEventListener("click", function(){
  p1Score++;
  console.log(p1Score);
  p1Display.textContent = p1Score;
});
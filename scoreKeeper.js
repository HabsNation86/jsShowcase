
let p1Button = document.querySelector("#p1");
let p2Button = document.querySelector("#p2");
let input = document.querySelector("#playToScore")
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let resetButton = document.querySelector("#reset");
let p1Score = 0;
let p2Score = 0;

// Player One Button
p1Button.addEventListener("click", function(){
  p1Score++;
  p1Display.textContent = p1Score;
});
// Player Two Button
p2Button.addEventListener("click", function(){
  p2Score++;
  p2Display.textContent = p2Score;
});
// Reset Button
resetButton.addEventListener("click", function(){
  p1Display.textContent = 0;
  p2Display.textContent = 0;
});

// Play to total
playToScore.addEventListener("click", function(){
  playToScore.textContent = input
})
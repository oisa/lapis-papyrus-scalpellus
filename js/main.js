//SETUP HUMAN PLAYER
let player = {
  currentChoice: null,
  score: 0,
};

//SETUP COMPUTER PLAYER
let computer = {
  currentChoice: null,
  score: 0,
};

//OPTIONS AVAILABLE IN THE GAME
const gameOptions = ["Lapis", "Papyrus", "Scalpellus"];

//RANDOMISED SELECTION - COMPUTER
function computerChooses(){
const randomIndexComputer = Math.floor(Math.random() * gameOptions.length);
computer.currentChoice = gameOptions[randomIndexComputer];
}

//IF STATEMENTS - COMPARE RESULTS TO DETERMINE WHO WINS
function compareChoices(){
computerChooses();

if (player.currentChoice === computer.currentChoice){
  return("It's a draw! Both you and the computer chose " + computer.currentChoice + ".");
}

else if (player.currentChoice === gameOptions[0]){
  if(computer.currentChoice === gameOptions[1]){
    return("The computer wins! The computer chose " + computer.currentChoice + " and you chose " + player.currentChoice + ".");
  }
  else {
    return("You win! The computer chose " + computer.currentChoice + " and you chose " + player.currentChoice + ".");
  }
}

else if (player.currentChoice === gameOptions[1]){
  if(computer.currentChoice === gameOptions[0]){
    return("You win! The computer chose " + computer.currentChoice + " and you chose " + player.currentChoice + ".");
  }
  else {
    return("The computer wins! The computer chose " + computer.currentChoice + " and you chose " + player.currentChoice + ".");
  }
}

else if (player.currentChoice === gameOptions[2]){
  if(computer.currentChoice === gameOptions[0]){
    return("The computer wins! The computer chose " + computer.currentChoice + " and you chose " + player.currentChoice + ".");
  }
  else {
    return("You win! The computer chose " + computer.currentChoice + " and you chose " + player.currentChoice + ".");
  }
}
}

//COMPARE THE CHOICES
compareChoices();

//PLAYER CHOICE FUNCTION
// -- LAPIS OPTION --
document.getElementById(gameOptions[0]).addEventListener("click", function (e) {
  player.currentChoice = e.target.innerText;
  compareChoices();
  document.getElementById('resultsCSS').innerText = compareChoices();
  updateScore();
  scoreDisplay();
  console.log(compareChoices());
  });

// -- PAPYRUS OPTION --
document.getElementById(gameOptions[1]).addEventListener("click", function (e) {
  player.currentChoice = e.target.innerText;
  compareChoices();
  document.getElementById('resultsCSS').innerText = compareChoices();
  updateScore();
  scoreDisplay();
  console.log(compareChoices());
  });

// -- SCALPELLUS OPTION --
document.getElementById(gameOptions[2]).addEventListener("click", function (e) {
  player.currentChoice = e.target.innerText;
  compareChoices();
  document.getElementById('resultsCSS').innerText = compareChoices();
  updateScore();
  scoreDisplay();
  console.log(compareChoices());
  });

//INITIAL CONTENT FOR RESULTS AREA
  document.getElementById('resultsCSS').innerText = "...and the winner is...";

//UPDATE SCORE
function updateScore(){

if (player.currentChoice === computer.currentChoice){
  player.score++;
  computer.score++;
  drawBg();
}

else if (player.currentChoice === gameOptions[0]){
  if(computer.currentChoice === gameOptions[1]){
    computer.score++;
    loseBg();
  }
  else {
    player.score++;
    winBg();
  }
}

else if (player.currentChoice === gameOptions[1]){
  if(computer.currentChoice === gameOptions[0]){
    player.score++;
    winBg();
  }
  else {
    computer.score++;
    loseBg();
  }
}

else if (player.currentChoice === gameOptions[2]){
  if(computer.currentChoice === gameOptions[0]){
    computer.score++;
    loseBg();
  }
  else {
    player.score++;
    winBg();
  }
}
}

//DISPLAY SCORE
function scoreDisplay(){
  document.getElementById('player-score').innerText = "Player: " + player.score;
  document.getElementById('computer-score').innerText = "Computer: " + computer.score;
}

//CHANGE BACKGROUND COLOUR DEPENDING ON RESULT
function winBg(){
  document.querySelector('#results').className = 'results-container results-win';
}

function drawBg(){
  document.querySelector('#results').className = 'results-container results-draw';
}

function loseBg(){
  document.querySelector('#results').className = 'results-container results-lose';
}

function resetBg(){
  document.querySelector('#results').className = 'results-container';
}

//RESET SCORE
function resetGame (){
  player.score = 0;
  computer.score = 0;
  scoreDisplay();
  resetBg();
  document.getElementById('resultsCSS').innerText = "...annnnd we're back with a clean slate. Take your pick!";
}

document.querySelector('#reset-button').addEventListener("click", resetGame);

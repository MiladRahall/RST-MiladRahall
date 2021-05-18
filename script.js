// Setting up my variables and constant
let points = 0
const increase = 1
const cpoint = 1
let mult = 1
let price = 250
// Adding event listeners to my buttons
document.getElementById('clicker').addEventListener('click', click)
document.getElementById('upbutton').addEventListener('click', upgrade1)
document.getElementById('winbutton').addEventListener('click', win)
// This function determines the amount of points gained when the user clicks on the clicker
function click () {
  points = points + cpoint * mult
  document.getElementById('score1').innerHTML = points
}
// The upgrade1 function is to upgrade the clicker. When the clicker is upgraded, the points per click will be multiplied
function upgrade1 () {
  if (points >= price) {
    points = points - price
    mult = mult + increase
    price = price + 250
    document.getElementById('textprice').innerHTML = price
    document.getElementById('score1').innerHTML = points
  } else {
    alert('You need more points to upgrade the clicker')
  }
}
// This function allows the player to win once they have reached the required points. Once they have obtained 1250 points or more, they can hit the confirm completion button for a winning text to appear.
function win () {
  if (points >= 1250) {
    points = points - 1250
    document.getElementById('win-1').innerHTML = ('You win!')
  } else {
    alert('You need more points to win the game')
  }
}

var numPlayer = Math.floor(Math.random() * 6) + 1
var numComputer = Math.floor(Math.random() * 6) + 1

console.log(numPlayer)
console.log(numComputer)

if (numPlayer > numComputer){
  alert('Hai vinto')
}else if (numPlayer < numComputer){
  alert('Hai perso')
}else{
  alert('Pareggio')
}
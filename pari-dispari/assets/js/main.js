// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto


const player_bet = true
const player_number = 3
const computer_number = 7 // Math.floor(Math.random() * 5) + 1;

const sum_number_even_odd = (player_number + computer_number) % 2 == 0

console.log(sum_number_even_odd)


if () {


} else {


}




// let numberRandomWinner;
// const numberRandomHuman = Math.floor(Math.random() * 6) + 1;
// const numberRandomComputer = Math.floor(Math.random() * 6) + 1;

// if (numberRandomHuman > numberRandomComputer) {
//     numberRandomWinner = 'The Human wins'
// } else if (numberRandomComputer > numberRandomHuman) {
//     numberRandomWinner = 'The Computer wins'
// } else {
//     numberRandomWinner = 'Draw'
// }

// console.log(`Human ${numberRandomHuman} - ${numberRandomComputer} Computer, ${numberRandomWinner}`)

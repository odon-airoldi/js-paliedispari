// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto



function odd_even_game(player_bet, player_number) {

    const computer_number = Math.floor(Math.random() * 5) + 1;

    const sum_numbers_even = (player_number + computer_number) % 2 == 0;
    
    if ((sum_numbers_even && player_bet == 'even') || (!sum_numbers_even && player_bet == 'odd')) {

        document.writeln('YOU WIN');

    } else {

        document.writeln('YOU LOST');

    }

    console.log(player_bet, player_number, computer_number, sum_numbers_even)

}

odd_even_game(prompt('Place your bet, write "even" or "odd"'), Number(prompt('Choose a number from 1 to 5')));
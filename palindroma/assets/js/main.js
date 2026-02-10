// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



function check_palindrome_word(word) {

    let word_reverse = '';

    for(i = word.length - 1; i >= 0; i-- ) {
        const char_word = word[1];
        word_reverse += char_word;
    }

    if (word === word_reverse) {
        document.writeln(`${word} is a palindrome word`)
    } else {
        document.writeln(`${word} is not a palindrome word`)
    }

}

const user_word = prompt('Enter a word');

check_palindrome_word(user_word)

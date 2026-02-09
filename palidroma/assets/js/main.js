// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function check_palindrome_word(user_word) {

    const arr_user_word_reverse = [];

    for(i = user_word.length - 1; i >= 0; i-- ) {
        arr_user_word_reverse.push(user_word[i])
        user_word_reverse = arr_user_word_reverse.join('');
    }

    if (user_word === user_word_reverse) {
        document.writeln(`${user_word} is a palindrome word`)
    } else {
        document.writeln(`${user_word} is not a palindrome word`)
    }

}

check_palindrome_word(prompt('Enter a word'))


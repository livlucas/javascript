/*
  Please add all Javascript code to this file.
  GA JS-SF-7
  Livia Lucas de Medeiros
*/

"use strict";

var max_attempts = 8,
    lives = 5,
    //word to be guessed by player
    wordToGuess,
    //array containing every wrong guess
    wrongGuesses = [],
    //array containing number of letters of wordToGuess
    //every right letter is to be inserted here
    guessedWord;

function wordToBeGuessed() {
    var randomWord,
        index,
        category;

    randomWord = words[Math.floor(
        Math.random() *words.length)].word; 
    index = words.findIndex(w => w.word === randomWord);
    category = words[index].category;

    wordToGuess = randomWord;
    guessedWord = new Array(wordToGuess.length);

    return {
        word: randomWord,
        category: category
    };
}

function guessLetter(letter) {
    var i,
        j,
        isRightGuess = false;

    for (j = 0; j < wordToGuess.length; j += 1) {
        if (letter === wrongGuesses[j]) {
            return;
        }
    }

    for (i = 0; i < wordToGuess.length; i += 1) {
        if (letter === wordToGuess[i]) {
            guessedWord[i] = wordToGuess[i];
            isRightGuess = true;
        }
    }
    if (!isRightGuess) {
        wrongGuesses[wrongGuesses.length] = letter;
    }
}

function isGameOver() {
    if (wrongGuesses.length >= max_attempts) {
        // lives -= 1;
        return true;
    }
    return false;
}

function updateLives() {
    if (isGamesOver()) {
        lives -=1 ;
    }
}

function isZeroLives() {
    if (lives === 0) {
        return true;
    }
    return false;
}

function isGameWon() {
    var i;

    for (i = 0; i < guessedWord.length; i+= 1) {
        if (guessedWord[i] === undefined) {
            return false;
        }
    }

     return true;
}
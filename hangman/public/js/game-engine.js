/*
  Please add all Javascript code to this file.
  GA JS-SF-7
  Livia Lucas de Medeiros
*/

"use strict";

HANGMAN.game = {
    maxAttempts: 6,
    allowedCharacters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    wordToGuess: '',
    guessedWord: '',
    wrongGuesses: [],
    currentScore: 0,
    score: 0,

    start: function (categoryWords) {
        this.wrongGuesses = [];
        this.wordToGuess = '';
        this.guessedWord = '';

        this.raffleWord(categoryWords);
    },

    addScore: function (points) {
        this.score += points;
    },

    resetScore: function () {
        this.score = 0;
    },

    getRemainingAttempts: function () {
        return this.maxAttempts - this.wrongGuesses.length;
    },

    raffleWord: function (categoryWords) {
        var randomWord;

        randomWord = categoryWords[
            Math.floor(
                Math.random() * categoryWords.length
            )
        ];

        this.wordToGuess = randomWord;
        this.guessedWord = Array(this.wordToGuess.length).fill(undefined);

        return randomWord;
    },

    guessLetter: function (letter) {
        var i,
            isRightGuess = false;

        if ((letter === "") 
          || (this.allowedCharacters.indexOf(letter) === -1)) {
            return;
        }

        //avoiding repeated wrong letters
        for (i = 0; i < this.wrongGuesses.length; i += 1) {
            if (letter === this.wrongGuesses[i]) {
                return;
            }
        }

        //finding all ocurrences of the guessed letter
        for (i = 0; i < this.wordToGuess.length; i += 1) {
            if (letter === this.wordToGuess[i]) {
                this.guessedWord[i] = letter;
                isRightGuess = true;
            }
        }

        if (isRightGuess) return;
        
        this.wrongGuesses.push(letter);
    },

    isGameOver: function () {
        return (this.wrongGuesses.length >= this.maxAttempts);
    },

    isGameWon: function () {
        var i;

        for (i = 0; i < this.guessedWord.length; i += 1) {
            if (this.guessedWord[i] === undefined) {
                return false;
            }
        }

         return true;
    }
};
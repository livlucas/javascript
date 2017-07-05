/*
  Please add all Javascript code to this file.
  GA JS-SF-7
  Livia Lucas de Medeiros
*/

"use strict";

$(document).ready(function() {
    var lengthOfWord,
        $letterGuessed;

    hideGuessBox();

    $('#start-game').on('click', function() {
        initNewGame();
    });

    function initNewGame() {
        eraseGameContents();
        lives = 5;
        wrongGuesses = [];
        wordToBeGuessed();
        printUnderscoreToPage();
        printRemainingAttempts();
        $('#guess-box').show();
    }

    function eraseGameContents() {
        $('#js-guessing').text('');
        $('#js-wrong-guesses').text('');
        $('#js-wrong-letters').text('');
    }

    function printUnderscoreToPage() {
        var i,
            lengthOfWord;

            lengthOfWord = wordToGuess.length;

        for (i = 0; i < lengthOfWord; i += 1) {
            $('#js-guessing').append('_ ');
        }
    }

    function updateUi() {
        guessedWord.forEach(function(e) {
            if(e === undefined) {
                console.log('-')
            }
            if(e !== undefined) {
                console.log(e);
            }
        });
    }

    function checkGameOver() {
        var message;

        if (!isGameOver() && !isGameWon()) return false;

        if (isGameWon()) {
            alert('You win! Your word was: ' + wordToGuess);
            initNewGame();
        }

        if (isGameOver()) {
            alert('You Lost. The game will restart with a new word.' +
                'your word was: '  + wordToGuess);
            initNewGame();
        }

        true;
    }

    function printRemainingAttempts() {
        var i,
            lengthOfWord;

        $('#js-wrong-guesses').text(
            'you have ' + (max_attempts - wrongGuesses.length) + 
            ' out of ' +
            max_attempts + ' attempts');
    }

    function printWrongLetters() {
        if (wrongGuesses.length === 0) {
            return;
        } else {
        $('#js-wrong-letters').text('wrong attempts: ' +  wrongGuesses.join('-'));
        }
    }

    function hideGuessBox() {
        $('#guess-box').hide();
    }

    $('#js-guess').on('click', function() { 
        var $inputValue;

        $letterGuessed = $('#guess-text').val();

        $inputValue = $letterGuessed.trim().toLowerCase();
        guessLetter($inputValue);

        $('#guess-text').val('');
        $('#guess-text').focus();
        printRemainingAttempts();
        printWrongLetters();
        checkGameOver();
    });
});
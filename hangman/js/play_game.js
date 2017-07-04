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
        lives = 5;
            wrongGuesses = [];
            wordToBeGuessed();
            printUnderscoreToPage();
            updateWrongGuesses();
            $('#guess-box').show();
    }

    function printUnderscoreToPage() {
        var i,
            lengthOfWord;

            lengthOfWord = wordToGuess.length;

        for (i = 0; i < lengthOfWord; i += 1) {
            $('#js-guessing').append('_ ');
        }
    }

    function updateWrongGuesses() {
        var i,
            lengthOfWord;

        $('#js-wrong-guesses').text(
            (max_attempts - wrongGuesses.length) + 
            ' out of ' +
            max_attempts + ' chances');
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
    });
});
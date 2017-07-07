/*
  Please add all Javascript code to this file.
  GA JS-SF-7
  Livia Lucas de Medeiros
*/

"use strict";

var categorySelected;

function initUi() {
    fillCategoryDropdown();
}

//iterates thru object to get a list of categories
function categoryList(list) {
    var keys;

    keys = Object.keys(list);

    return keys;
}

//generates html for categories list
function generateCategoryListStructure() {
    var html, 
        $categoryList;

    html = '<li class = "list-item"><a href="#"></a></li>'

    $categoryList = $(html);
    return $categoryList;
}

//iterates thru list of categories and appends it to DOM structure
function generateEachCategory(callback) {
    callback.forEach(function (e) {
        var $categoryList;

        $categoryList = generateCategoryListStructure();

        $('#menu-items').append($categoryList);
        $categoryList.find('a').append(e);
    });
}

function fillCategoryDropdown() {
    var width = {};
    
    generateEachCategory(categoryList(words));

    //calculate max width
    width.select = $('#category-list').width();
    width.list = $('#category-list ul').css({
        visibility: 'hidden', 
        display: 'block'
    }).width();

    $('#category-list ul').removeAttr('style');

    $('#category-list').width(Math.max(width.select, width.list));
}

function showGamePanel() {
    $('#game-menu').slideUp();
    $('#game-panel').slideDown();
    $('#guess-text').focus();
}

function showGameMenu() {
    $('#game-panel').slideUp();
    $('#game-menu').slideDown();
}


$(document).ready(function() {
    var lengthOfWord,
        $letterGuessed;

    //hideGuessBox();
    initUi();

    $('#start-game').attr('disabled', true);

    $('#start-game').on('click', function() {
        if (categorySelected !== undefined 
            && categorySelected !== '') {
            initNewGame();
        }
    });

    function initNewGame() {
        eraseGameContents();
        lives = 5;
        wrongGuesses = [];
        wordToBeGuessed();
        printUnderscoreToPage();
        printRemainingAttempts();
        showGamePanel();
    }

    function eraseGameContents() {
        $('#js-guessing').text('');
        $('#js-wrong-guesses').text('');
        $('#js-wrong-letters').text('');
    }

    function printUnderscoreToPage() {
        var i,
            lengthOfWord;

            lengthOfWord = guessedWord.length;

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

    //inserts wrong guesses to DOM
    function printWrongLetters() {
        if (wrongGuesses.length === 0) {
            return;
        } else {
        $('#js-wrong-letters').text('wrong attempts: ' +  wrongGuesses.join('-'));
        }
    }

    function makeAGuess() { 
        var $inputValue;

        $letterGuessed = $('#guess-text').val();

        $inputValue = $letterGuessed.trim().toLowerCase();
        guessLetter($inputValue);

        $('#guess-text').val('');
        $('#guess-text').focus();
        printRemainingAttempts();
        printWrongLetters();
        checkGameOver();
    }

    $('#guess-text').on('keyup', function (e) {
        var code = e.keyCode || e.which;

        if (code === 13) {
            makeAGuess();
        }

        $('#guess-text').select();
    });

    $('#js-guess').on('click', makeAGuess);

    //gets value of selected category from dropdown list
    $(document).on('click', '.dropdown-menu li a', function () {
        var selectedCategory;

        selectedCategory = $(this).text();
        //setting value of category to global variable
        categorySelected = selectedCategory;
        $('#category-list .js-label').text(categorySelected);
        $('#start-game').attr('disabled', false);
    });
});

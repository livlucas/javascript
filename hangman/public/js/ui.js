/*
  Please add all Javascript code to this file.
  GA JS-SF-7
  Livia Lucas de Medeiros
*/

"use strict";

var categorySelected;

function initUi(words) {
    renderCategoryDropdown(words);

    $('#start-game').attr('disabled', true);

    bindEvents(words);
}

function bindEvents(words) {
    $('#start-game').on('click', function() {
        if (categorySelected !== undefined 
            && categorySelected !== '') {
            initNewGame(words);
        }
    });

    $('#guess-text').on('keyup', function (e) {
        var code = e.keyCode || e.which;

        if (code === 13) {
            makeAGuess(words);
        }

        $('#guess-text').select();
    });

    $('#js-guess').on('click', function () {
        makeAGuess(words);
    });

    //gets value of selected category from dropdown list
    $(document).on('click', '.dropdown-menu li a', function () {
        var selectedCategory;

        selectedCategory = $(this).text();
        //setting value of category to global variable
        categorySelected = selectedCategory;
        $('#category-list .js-label').text(categorySelected);
        $('#start-game').attr('disabled', false);
    });

    //submit score form
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
function renderCategoryOptions(categories) {
    categories.forEach(function (e) {
        var $categoryList;

        $categoryList = generateCategoryListStructure();

        $('#menu-items').append($categoryList);
        $categoryList.find('a').append(e);
    });
}

function renderCategoryDropdown(words) {
    var width = {},
        categories = categoryList(words);
    
    renderCategoryOptions(categories);

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

function updateUi() {
    var state;

    state = guessedWord
        .map(function(item) { return item === undefined ? '_' : item;})
        .join(' '); 

    $('#js-guessing').text(state);
}

function initNewGame(words) {
    resetGamePanels();
    wrongGuesses = [];
    raffleWord(words);
    printUnderscoreToPage();
    updateRemainingAttempts();
    showGamePanel();
    updateScore();
}

function resetGamePanels() {
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

function checkGameOver(words) {
    var message,
        currentScore;

    if (!isGameOver() && !isGameWon()) return false;

    if (isGameWon()) {
        score += 10;
        alert('You got it! Your word was: ' +
            wordToGuess + 
            ' Keep playing!');
        console.log(score);
        updateScore();
        initNewGame(words);
    }

    if (isGameOver()) {
        //variable to save final score to db safely
        currentScore = score;
        $('#game-over-container .score-display').text(currentScore);

        $('#game-panel').slideUp();
        $('#game-over-container').slideDown();
        score = 0;
    }
}

function updateScore() {
    $('#score').text('your score is: ' + score);
}

function updateRemainingAttempts() {
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

function makeAGuess(words) { 
    var $inputValue,
        $letterGuessed;

    $letterGuessed = $('#guess-text').val();

    $inputValue = $letterGuessed.trim().toLowerCase();
    guessLetter($inputValue);

    $('#guess-text').val('');
    $('#guess-text').focus();
    updateUi();
    updateRemainingAttempts();
    printWrongLetters();
    checkGameOver(words);
}

$(function() {
    var db;

    db = HANGMAN.database;

    db.init();

    db.readWords(initUi);
});

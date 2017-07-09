/*
  Please add all Javascript code to this file.
  GA JS-SF-7
  Livia Lucas de Medeiros
*/

"use strict";

HANGMAN.ui = {
    game: HANGMAN.game,

    database: HANGMAN.database,

    categorySelected: '',

    init: function (words) {
        this.renderCategoryDropdown(words);

        $('#start-game').attr('disabled', true);

        this.bindEvents(words);
    },

    bindEvents: function (words) {
        var self = this;
        $('#start-game').on('click', function() {
            if (self.categorySelected !== undefined 
                && self.categorySelected !== '') {
                self.initNewGame(words);
            }
            $('.js-selected-category').text(self.categorySelected);
        });

        $('#guess-text').on('keyup', function (e) {
            var code = e.keyCode || e.which;

            if (code === 13) {
                self.makeAGuess(words);
            }

            $('#guess-text').select();
        });

        $('#js-guess').on('click', function () {
            self.makeAGuess(words);
        });

        //gets value of selected category from dropdown list
        $(document).on('click', '.dropdown-menu li a', function () {
            var selectedCategory;

            selectedCategory = $(this).text();
            //setting value of category to global variable
            self.categorySelected = selectedCategory;
            $('#category-list .js-label').text(self.categorySelected);
            $('#start-game').attr('disabled', false);
        });

        $('#submit-score').on('click', function () {
            var self = this;

            self.database.saveScore(getScore());
        });
    },

    getScore: function () {
        var nameValue,
            score;

            score = this.game.currentScore;

            nameValue = $('#exampleInputName2').val();
            console.log(nameValue);
            console.log(score);

            return {
                name: nameValue,
                score: score
            }
    },

    //gets all keys of list
    categoryList: function (list) {
        var keys;

        //gets all keys of list
        keys = Object.keys(list);

        return keys;
    },

    generateCategoryListStructure: function () {
        var html, 
        $categoryList;

        html = '<li class = "list-item"><a href="#"></a></li>'

        $categoryList = $(html);
        return $categoryList;
    },

    renderCategoryOptions: function (categories) {
        var self = this;

        categories.forEach(function (e) {
            var $categoryList;

            $categoryList = self.generateCategoryListStructure();

            $('#menu-items').append($categoryList);
            $categoryList.find('a').append(e);
        });
    },

    renderCategoryDropdown: function (words) {
        var width = {},
        categories = this.categoryList(words);
    
        this.renderCategoryOptions(categories);

        //calculate max width
        width.select = $('#category-list').width();
        width.list = $('#category-list ul').css({
            visibility: 'hidden', 
            display: 'block'
        }).width();

        $('#category-list ul').removeAttr('style');

        $('#category-list').width(Math.max(width.select, width.list));
    },

    showGamePanel: function () {
        $('.js-page').slideUp();
        $('#game-panel').slideDown();
        $('#guess-text').focus();
    },

    showGameMenu: function () {
        $('.js-page').slideUp();
        $('#game-menu').slideDown();
    },

    showGameOver: function () {
        $('.js-page').slideUp();
        $('#game-over-container').slideDown();
    },

    initNewGame: function (words) {
        this.game.start(words[this.categorySelected]);

        //ui
        this.showGamePanel();
        this.updateGamePanel();
    },

    updateGamePanel: function () {
        var state;

        state = this.game
        .guessedWord
        .map(function(item) { return item === undefined ? '_' : item;})
        .join(' '); 

        $('#js-guessing').text(state);

        this.updateRemainingAttempts();
        this.updateScore();
        this.updateWrongLetters();
    },

    updateScore: function () {
        $('#score').text('your score is: ' + this.game.score);
    },

    updateRemainingAttempts: function () {
        var i,
            lengthOfWord;

        $('#js-wrong-guesses').text(
            'you have ' 
            + this.game.getRemainingAttempts() 
            + ' out of ' 
            + this.game.maxAttempts 
            + ' attempts'
        );
    },

    updateWrongLetters: function () {
        if (this.game.wrongGuesses.length === 0) {
            $('#js-wrong-letters').text('');
            return;
        }

        $('#js-wrong-letters').text('wrong attempts: ' +  this.game.wrongGuesses.join('-'));
    },

    makeAGuess: function (words) { 
        var letterGuessed;

        letterGuessed = $('#guess-text').val();
        letterGuessed = letterGuessed.trim().toLowerCase();

        this.game.guessLetter(letterGuessed);

        $('#guess-text').val('');
        $('#guess-text').focus();

        this.updateGamePanel();
        this.checkGameOver(words);
    },

    //checks and manipulates DOM when game is over or game won!
    checkGameOver: function (words) {
        var message;

        if (!this.game.isGameOver() && !this.game.isGameWon()) return false;

        if (this.game.isGameWon()) {
            this.game.addScore(10);

            alert('You got it! Your word was: ' +
                this.game.wordToGuess + 
                ' Keep playing!');

            this.updateScore();
            this.initNewGame(words);
        }

        if (this.game.isGameOver()) {
            if(this.game.score === 0) {
                $('#game-over-container p').text('You lose! Click continue to start a new game!');
                $('#name-form').hide();
                //hide game over panel
                //show contiue button
            }
            this.game.currentScore = this.game.score;
            this.game.resetScore();

            $('#game-over-container .score-display').text('You lose! Your score was: ' + this.game.currentScore);
            this.showGameOver();
            $('#continue-game').hide();
        }
    },

    updateRecords: function (records) {
        console.log(records);
    }

};

//iterar, passar pra lista, chamar callback.

//when document ready
$(function() {
    var db;

    db = HANGMAN.database;

    db.init();

    db.readWords(function (words) {
        HANGMAN.ui.init(words);
    });

    db.getTopScores(function (records) {
        HANGMAN.ui.updateRecords(records);
    })
});


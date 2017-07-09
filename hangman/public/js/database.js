/*
  Please add all Javascript code to this file.
  GA JS-SF-7
  Livia Lucas de Medeiros
*/

"use strict";

HANGMAN.database = {
    app: null,
    db: null,

    config: {
        apiKey: "AIzaSyAnqm-P2mNrnS0sJC_FNr-7qGefl9hNxmY",
        databaseURL: "https://hangman-7d276.firebaseio.com",
        projectId: "hangman-7d276"
    },

    init: function () {
        this.app = firebase.initializeApp(this.config);
        this.db = this.app.database();
    },

    _getWordsRef: function () {
        return this.db.ref('/words');
    },

    writeWordsData: function () {
        this._getWordsRef()
        .set({
            sports: [
                'baseball', 'football', 'volleyball', 'basketball', 'soccer'
            ],

            animals: [ 
                'dog', 'cat', 'elephant', 'crocodile', 'bird'
            ],

            entertainment: [
                'netflix', 'movies', 'music', 'concert', 'band', 'computer'
            ]
        });
    },

    readWords: function (callback) {
        this._getWordsRef()
        .once('value')
        .then(function (snapshot) {
            var words = snapshot.val();

            callback(words);
        });
    },

    _getScoresRef: function () {
        return this.db.ref('/scores');
    },

    saveScore: function (score) {
        this._getScoresRef()
            .push(score);
    },

    getTopScores: function () {
        this._getScoresRef('/scores')
          .orderByChild('score') //ordering by the score property
          .limitToLast(5) //getting last 15 results
          .once('value')
          .then(function (snapshot) {
            //iterate the snapshot
            snapshot.forEach(function (childss) {
                var scoreRecord = childss.val();
                console.log(scoreRecord);
            });
        });
    }

};
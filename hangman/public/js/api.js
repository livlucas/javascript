'use strict';
//this code gets us the request and the data in a JSON object.

//wordnik
HANGMAN.api = {
    // url: 'http://api.wordnik.com:80/v4/words.json/wordOfTheDay',
    // key: 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
    url: 'https://wordsapiv1.p.mashape.com/words/',
    key: 'VC0rOnrCjkmshvCFed7sv8BaWm1Wp1C0Y5Gjsng7Z2dxt19byj',

    wordOfTheDayRequest: function (callback) {
        var self = this;
        $.ajax({
            method: 'GET',
            datatype: 'json',
            url: this.url,
            headers: {
                'x-mashape-key': this.key
            },
            data: {
                'random': 'true'
            },
            success: function (randomResult) {
                if (randomResult.results
                    && randomResult.results.length) {
                    callback({
                        word: randomResult.word,
                        definition: randomResult.results[0].definition
                    });
                    return;
                }

                self.wordOfTheDayRequest(callback);
            }
        });
    },
};


















































// var nyTimes = {
//         method: 'GET',
//         url: {
//             sports: 'https://api.nytimes.com/svc/mostpopular/v2/mostshared/Sports/30.json',
//             us: 'https://api.nytimes.com/svc/mostpopular/v2/mostshared/U.S./30.json',
//             magazine: 'https://api.nytimes.com/svc/mostpopular/v2/mostshared/Magazine/30.json',
//         },
//         data: {
//             'api-key': '91fbed0edd7445d0ad6e36aa753757ff' 
//         }
//     },

//     techCrunch = {
//         method: 'GET',
//         url: 'https://content.guardianapis.com/search',
//         data: {
//             'api-key': '54c2cdae4589405a8451892aa5c20755'
//         }
//     };

// function parseNYResults(dataResponse) {
//     var articles = dataResponse.results;

//     // article = {
//     //     title: a.title,
//     //     category: a.section,
//     //     thumbnail: findMediaUrlNY(a),
//     //     description: a.abstract,
//     //     link: a.url,
//     //     impressions: a.total_shares,
//     // };

//     console.log('NY times', articles);
// }

// function parseTheGuardianResults(dataResponse) {
//     var articles = dataResponse.response.results;

//     console.log('the guardian', articles);
// }

// function findMediaUrlNY(article) {
//     var medias;

//     if (article.media && article.media.length) {
//         medias = article.media[0]['media-metadata'];
//     } else if (article.multimedia && article.multimedia.length) {
//         medias = article.multimedia;
//     }

//     if (medias === undefined || medias.length === 0) return '';

//     return medias[0].url;
// }

// function articleApiRequest(apiDetails, callback) {
//     var key;

//     if (typeof apiDetails.url === 'string') {
//         $.ajax({
//             method: 'GET',
//             url: apiDetails.url,
//             data: apiDetails.data,
//             success: callback
//         });
//         return;
//     }

//     for (key in apiDetails.url) {
//         if (!apiDetails.url.hasOwnProperty(key)) continue;
        
//         $.ajax({
//             method: 'GET',
//             url: apiDetails.url[key],
//             data: apiDetails.data,
//             success: callback
//         });
//     }
// }

// articleApiRequest(nyTimes, parseNYResults);
// articleApiRequest(theGuardian, parseTheGuardianResults);

'use strict';
//this code gets us the request and the data in a JSON object.


var eventFul = {
    url: 'http://api.eventful.com/json/events/search',
    key: 'F6Jk5KpSMrxV8xnb'
}

$.ajax({
    method: 'GET',
    url: eventFul.url,
    data: {
        app_key: eventFul.key,
        //location: 'San+Francisco'
    },
    success: function (response) {
        console.log(response);
    }
});


















































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

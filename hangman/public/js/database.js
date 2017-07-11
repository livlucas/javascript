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
                'aerobics','archer','archery','arena','arrow','athlete','athletics','axel','badminton','ball','base','baseball','basketball','bat','baton','batter','batting','biathlon','bicycle','bicycling','bike','biking','billiards','bobsleigh','bocce','boomerang','boules','bow','bowler','bowling','boxer','boxing','bronze medal','bunt','canoe','canoeing','catcher','champion','championship','cleats','club','coach','compete','competing','competition','dart','dartboard','deadlifting','decathlon','defense','diamond','discus','dive','diver','diving','dodgeball','doubleheader','dugout','epee','equestrian','equipment','exercise','fencing','field','fielder','field hockey','fielding','figure skating','fitness','football','forward','free','frisbee','game','gear','geocaching','go','goal','goalie','gold medal','golf','golfer','golfing','guard','gym','gymnast','gymnastics','gymnasium','halftime','hammer','handball','hang gliding','hardball','helmet','heptathlon','high jump','hitter','hockey','home','home plate','home run','home team','hoop','horseshoes','huddle','hurdle','ice hockey','ice rink','ice skates','ice skating','infield','infielder','inline skates','inning','javelin','jog','jogger','judo','jump','jumper','jumping','jump rope','karate','kayak','kayaker','kayaking','kickball','kneepads','king fu','kite','lacrosse','lawn bowling','league','lose','loser','luge','lutz','major league','mallet','martial arts','mat','medal','minor league','mitt','mouthguard','move','movement','MVP','net','no-hitter','Nordic skiing','offense','ollie','Olympics','orienteering','out','outfield','outfielder','paddle','paddleball','paddling','paintball','parasailing','parkour','pentathlon','pickleball','ping pong','pitch','pitcher','play','player','playing','playoffs','pogo stick','pole','pole vault','polo','pool','puck','quarter','quarterback','quiver','race','racer','racewalking','racing','racket','racquetball','rafting','referee','relay','ride','riding','rink','rock climbing','roller skates','roller skating','row','rower','rowing','rugby','run','runner','running','sailing','score','scoreboard','scuba','scull','sculling','shortstop','shot put','silver medal','skate','skating rink','skeleton','ski','skier','skiing','slalom','sled','sledder','sledding','snorkling','snowboard','snowboarder','snowboarding','snowshoeing','soccer','softball','somersault','speed skating','sport','sportsmanship','squash','stadium','stick','strike','stroke','Sumo wrestling','surfer','surfing','swim','swimmer','swimming','ping pong','taekwondo','tag','target','team','teammate','tee','telemark skiing','tennis','tetherball','throwing','tie','toboggan','ultramarathon','ultramarathoner','umpire','unicycle','unicyclist','uniform','windsurfer','windsurfing','winner','winning','World Cup','World Series','wrestler','wrestling'
            ],

            animals: [ 
                'alligator','ant','bear','beaver','bee','bird','bobcat','camel','cat','cheetah','chicken','chimpanzee','chipmunk','cow','crocodile','deer','dog','dolphin','duck','eagle','elk','elephant','fish','fly','fox','frog','gray','giraffe','goat','goldfish','hamster','hippopotamus','horse','kangaroo','kitten','lion','lobster','monkey','octopus','owl','pack','panda','pig','puppy','rabbit','raccoon','rat','scorpion','seal','shark','sheep','snail','snake','spider','squirrel','tiger','turtle','wood','wolf','zebra'
            ],

            slangs: [
                'props', 'kudos', 'diss', 'dig', 'bail', 'hooker', 'juiced', 'queen', 'trashed', 'zonked', 'warez', 'wasted', 'jam', 'humungous', 'racket', 'goofy', 'bang', 'biggie', 'wimpy', 'goof', 'piss', 'nuts' 
            ],


            entertainment: [
                'netflix', 'movies', 'music', 'concert', 'band', 'computer', 'game', 'headphones', 'speakers'
            ],

            planets: [
                'jupiter', 'saturn', 'mars', 'earth', 'venus', 'mercury', 'uranus', 'neptune'
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

    getTopScores: function (callback) {
        this._getScoresRef('/scores')
          .orderByChild('score')
          .limitToLast(20)
          .once('value')
          .then(function (snapshot) {
            var records = [];
            //iterate the snapshot
            snapshot.forEach(function (childss) {
                var scoreRecord = childss.val();
                records.push(scoreRecord);
            });

            callback(records.reverse());
        });
    }
};
/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

var lyrics = {
    first: 'of beer on the wall,',
    second: 'of beer.',
    third: 'Take one down and pass it around,',
    fourth: 'of beer on the wall.',
    fifth: 'No more bottle of beer on the wall, no more bottles of beer',
    final: 'Go to the store and buy some more, 99 bottles of beer on the wall.'
};

function pluralBottle(i) {
    return (i > 1) ? 'bottles' : 'bottle';
}

function songLyrics() {
	for (i = 99; i > 0; i -= 1) {
		console.log(
		    i + ' ' + pluralBottle(i) + ' ' + lyrics.first + '\n' +
		    i + ' ' + pluralBottle(i) + ' ' + lyrics.second + '\n' +
		    lyrics.third + ' ' + (i - 1) + ' ' + pluralBottle(i - 1) + ' ' + lyrics.fourth
		);
	}
}

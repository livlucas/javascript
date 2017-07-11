/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

//below using function inside of function
function randomNumberGenerator() {
	return (Math.floor(((Math.random() * 9) + 1)));
}

function generateRandomAddress(streetName, streetNumber, cityName, stateName, zipCode) {
	var streetNumber = [101, 9384, 3848, 7262, 48408, 947372, 9363629, 6252, 29984, 2819],
		streetName = ["Polk Street", "Hayes St.", "VanNess Av.", "Franklin St.", "Minna St.", "Maria Amália", "Pine St.", "16th St.", "9th St.", "Boulevard St."],
		cityName = ["San Francisco", "Sacramento", "Los Angeles", "San Jose", "Concord", "Walnut Creek", "Pleasanton", "Marin", "Sausalito", "Martinez"],
		stateName = ["CA", "NY", "CO", "NE", "WY", "WA", "TX", "Arizona", "NV", "NC"],
		zipCode = ["94758", "82620", "84272", "72623", "736379", "27281", "93273", "33795", "84737", "99724"],
		
		//randomNumber = (Math.floor(((Math.random() * 9) + 1))),
		randomAddress = (streetNumber[randomNumberGenerator()]) 
			+ ", " + (streetName[randomNumberGenerator()])
			+ ", " + (cityName[randomNumberGenerator()])
			+ ", " + (stateName[randomNumberGenerator()])
			+ ", " + (zipCode[randomNumberGenerator()]);
		
		console.log(randomAddress);
}

window.onload = generateRandomAddress;


/*
//below using the same randomNumber for every array information displayed
function generateRandomAddress(streetName, streetNumber, cityName, stateName, zipCode) {
	var streetNumber = [101, 9384, 3848, 7262, 48408, 947372, 9363629, 6252, 29984, 2819],
		streetName = ["Polk Street", "Hayes St.", "VanNess Av.", "Franklin St.", "Minna St.", "Maria Amália", "Pine St.", "16th St.", "9th St.", "Boulevard St."],
		cityName = ["San Francisco", "Sacramento", "Los Angeles", "San Jose", "Concord", "Walnut Creek", "Pleasanton", "Marin", "Sausalito", "Martinez"],
		stateName = ["CA", "NY", "CO", "NE", "WY", "WA", "TX", "Arizona", "NV", "NC"],
		zipCode = ["94758", "82620", "84272", "72623", "736379", "27281", "93273", "33795", "84737", "99724"],
		
		randomNumber = (Math.floor(((Math.random() * 9) + 1))),
		randomAddress = (streetNumber[randomNumber]) 
		+ ", " + (streetName[randomNumber] 
		+ ", " + (cityName[randomNumber]) 
		+ ", " + (stateName[randomNumber]) 
		+ ", " + (zipCode[randomNumber]));
		
		//console.log(randomNumber);
		console.log(randomAddress);
}

window.onload = generateRandomAddress;
*/

/*
var streetNumber = [101, 9384, 3848, 7262, 48408, 947372, 9363629, 6252, 29984, 2819];
var streetName = ["Polk Street", "Hayes St.", "VanNess Av.", "Franklin St.", "Minna St.", "Maria Amália", "Pine St.", "16th St.", "9th St.", "Boulevard St."];
var cityName = ["San Francisco", "Sacramento", "Los Angeles", "San Jose", "Concord", "Walnut Creek", "Pleasanton", "Marin", "Sausalito", "Martinez"];
var stateName = ["CA", "NY", "CO", "NE", "WY", "WA", "TX", "Arizona", "NV", "NC"];
var zipCode = ["94758", "82620", "84272", "72623", "736379", "27281", "93273", "33795", "84737", "99724"];
*/
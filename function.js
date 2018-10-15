//function random

function random(min, max) {
	return Math.floor(Math.random()*(max-min+1) + min);
}

//function minIntegerFromArray

function minIntegerFromArray(array) {
	let arrayNum = [];
	for (let i = 0; i < array.length; i++) {
		if(typeof array[i] === 'number'){
			arrayNum.push(array[i]);
		}
	}
	if (arrayNum.length === 0) {
		return false;
	}
	let min = arrayNum[0];
	for (let i = 0; i < arrayNum.length; i++) {
		if (arrayNum[i] < min) {
			min = arrayNum[i];
		}
	}
	return min;
}

//function minIntegerFromString

function minIntegerFromString(string) {
	let numArray = string.match(/\d+/g);
	let min = Number(numArray[0]);
	for (let i = 0; i < numArray.length; i++) {
		if (Number(numArray[i]) < min) {
			min = Number(numArray[i]);
		}
	}
	return min;
}

//function concatStringsByLength

function concatStringsByLength(arrayOfStrings, type) {
	if (type === 0) {
		return arrayOfStrings.sort(function(a, b){
			return a.length - b.length;
		}).join("");

	}
	else if(type === 1) {
		return arrayOfStrings.sort(function(a, b){
			return b.length - a.length;
		}).join("");

	}
}

module.exports = {
	random,
	minIntegerFromArray,
	minIntegerFromString,
	concatStringsByLength

};

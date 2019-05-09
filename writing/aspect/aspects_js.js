// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

var production = document.getElementById("Production");
var acting = document.getElementById("Acting");
var synopsis = document.getElementById("Synopsis");
var music = document.getElementById("Music");
var visual = document.getElementById("Visual");
var Pon = 0;
var Aon = 0;
var Son = 0;
var Mon = 0;
var Von = 0;
production.onclick = function() {
	console.log("production");
	if (Pon == 0) {
		Pon = 1;
		production.style.backgroundColor = 'darkturquoise';
	}
	else {
		Pon = 0;
		production.style.backgroundColor = '';
	}
}
acting.onclick = function() {
	console.log("acting");
	if (Aon == 0) {
		Aon = 1;
        acting.style.backgroundColor = 'darkturquoise';
	}
	else {
		Aon = 0;
		acting.style.backgroundColor = '';
	}
}
synopsis.onclick = function() {
	console.log("synopsis");
	if (Son == 0) {
		Son = 1;
        synopsis.style.backgroundColor = 'darkturquoise';
	}
	else {
		Son = 0;
		synopsis.style.backgroundColor = '';
	}
}
music.onclick = function() {
	console.log("music");
	if (Mon == 0) {
		Mon = 1;
        music.style.backgroundColor = 'darkturquoise';
	}
	else {
		Mon = 0;
		music.style.backgroundColor = '';
	}
}
visual.onclick = function() {
	console.log("visual");
	if (Von == 0) {
		Von = 1;
        visual.style.backgroundColor = 'darkturquoise';
	}
	else {
		Von = 0;
		visual.style.backgroundColor = '';
	}
}


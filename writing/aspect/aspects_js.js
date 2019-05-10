// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

var production = document.getElementById("Production");
var acting = document.getElementById("Acting");
var synopsis = document.getElementById("Synopsis");
var music = document.getElementById("Music");
var visual = document.getElementById("Visual");
var back = document.getElementById("backspace");
var Pon = 0;
var Aon = 0;
var Son = 0;
var Mon = 0;
var Von = 0;
var currenturl = window.location.href;
var firebaseConfig = {
    apiKey: "AIzaSyDDFiULsphXfbs8XMTaJr4o4dxCPvCyX8w",
    authDomain: "movielist-454ba.firebaseapp.com",
    databaseURL: "https://movielist-454ba.firebaseio.com",
    projectId: "movielist-454ba",
    storageBucket: "movielist-454ba.appspot.com",
    messagingSenderId: "444347257371",
    appId: "1:444347257371:web:080d977ab1da9906"
  };
firebase.initializeApp(firebaseConfig);


function parse_url(){
	var moviename = "";
	var queryflag = false;
	for (var i = 0; i< currenturl.length; i++){
		if (queryflag == true) {
			moviename = moviename + currenturl[i]; 
		}
		
		else if (currenturl[i] == '?') queryflag = true;
	}
	console.log(moviename);
	moviename.slice(5);
	return moviename;
}

function bindeventlistener(){
	
	back.onclick = function(){
		var deletetemp = firebase.database().ref('/').child('/review_temp/').remove();
		console.log("a");
		document.location.href = "../writing.html";
	}
	
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

}
function makeTempDB(moviename){
	var initaspect = {
						rating:0, 
						review : ""
						};

	var temp = firebase.database().ref('/review_temp/');
	var pushaspect = temp.push();
	pushaspect.set({"moviename" : moviename,
					"production" : initaspect,
					"acting" : initaspect,
					"synopsis" : initaspect,
					"visual" : initaspect,
					"music" : initaspect
	});
	
}

makeTempDB(parse_url());
bindeventlistener();


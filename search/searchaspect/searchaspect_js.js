// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
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

var production = document.getElementById("Production");
var acting = document.getElementById("Acting");
var synopsis = document.getElementById("Synopsis");
var music = document.getElementById("Music");
var visual = document.getElementById("Visual");
var okbtn = document.getElementById("ok");
var next_move = "../DPsearch3.html?"
var nm_havevalue = false;
var Pon = 0;
var Aon = 0;
var Son = 0;
var Mon = 0;
var Von = 0;
var para = document.location.href.split("?");
console.log(para);

var aspect = [];

if (para.length == 2) {
	next_move = next_move + para[1];
	nm_havevalue = true;
}
function clean_aspect(){
	if (Pon == 1){
		Pon = 0;
		production.style.backgroundColor = '';
	}
	if (Mon == 1){
		Mon = 0;
		music.style.backgroundColor = '';
	}
	if (Von == 1){
		Von = 0;
		visual.style.backgroundColor = '';
	}
	if (Aon == 1){
		Aon = 0;
		acting.style.backgroundColor = '';
	}
	if (Son == 1){
		Son = 0;
		synopsis.style.backgroundColor = '';
	}
}

production.onclick = function() {
	console.log("production");
	if (Pon == 0) {
		clean_aspect();
		Pon = 1;
		production.style.backgroundColor = 'darkturquoise';
		okbtn.disabled = false;
	}
	else {
		Pon = 0;
		if (Pon == 0 && Son == 0 && Mon == 0 && Von == 0 && Aon == 0) {
			okbtn.disabled = true;
		}
		production.style.backgroundColor = '';
	}
}
acting.onclick = function() {
	console.log("acting");
	if (Aon == 0) {
		clean_aspect();
		Aon = 1;
        acting.style.backgroundColor = 'darkturquoise';
		okbtn.disabled = false;
	}
	else {
		Aon = 0;
		if (Pon == 0 && Son == 0 && Mon == 0 && Von == 0 && Aon == 0) {
			okbtn.disabled = true;
		}
		acting.style.backgroundColor = '';
	}
}
synopsis.onclick = function() {
	console.log("synopsis");
	
	if (Son == 0) {
		clean_aspect();
		Son = 1;
        synopsis.style.backgroundColor = 'darkturquoise';
		okbtn.disabled = false;
	}
	else {
		Son = 0;
		if (Pon == 0 && Son == 0 && Mon == 0 && Von == 0 && Aon == 0) {
			okbtn.disabled = true;
		}
		synopsis.style.backgroundColor = '';
	}
}
music.onclick = function() {
	console.log("music");
	if (Mon == 0) {
		clean_aspect();
		Mon = 1;
        music.style.backgroundColor = 'darkturquoise';
		okbtn.disabled = false;
	}
	else {
		Mon = 0;
		if (Pon == 0 && Son == 0 && Mon == 0 && Von == 0 && Aon == 0) {
			okbtn.disabled = true;
		}
		music.style.backgroundColor = '';
	}
}
visual.onclick = function() {
	console.log("visual");
	if (Von == 0) {
		clean_aspect();
		Von = 1;
        visual.style.backgroundColor = 'darkturquoise';
		okbtn.disabled = false;
	}
	else {
		Von = 0;
		if (Pon == 0 && Son == 0 && Mon == 0 && Von == 0 && Aon == 0) {
			okbtn.disabled = true;
		}
		visual.style.backgroundColor = '';
	}
}

okbtn.onclick = function() {
	
	
	if (Pon == 1){
		console.log("pon");
		if(nm_havevalue){
			next_move=next_move + "&production=1"
		} 
		else {
			next_move=next_move + "production=1"
			nm_havevalue=true;
			
		}
	}
	if (Son == 1){
		console.log("son");
		if(nm_havevalue){
			next_move=next_move + "&synopsis=1"
		} 
		else {
			next_move=next_move + "synopsis=1"
			nm_havevalue=true;
			
		}
	}
	if (Mon == 1){
		console.log("mon");
		if(nm_havevalue){
			next_move=next_move + "&music=1"
		} 
		else {
			next_move=next_move + "music=1"
			nm_havevalue=true;
			
		}
	}
	if (Von == 1){
		console.log("von");
		if(nm_havevalue){
			next_move=next_move + "&visual=1"
		} 
		else {
			next_move=next_move + "visual=1"
			nm_havevalue=true;
			
		}
	}
	if (Aon == 1){
		console.log("aon");
		if(nm_havevalue){
			next_move=next_move + "&acting=1"
		} 
		else {
			next_move=next_move + "acting=1"
			nm_havevalue=true;
			
		}
	}
	console.log(next_move);
	
	
	var giveDataToDB = firebase.database().ref('/SearchAspect/').set({
		Production : Pon,
		Acting: Aon,
		Visual: Von,
		Synopsis: Son,
		Music:Mon 
	},function(error){
		if(error){
			console.log("error occur");
		}
		else{
			location.href = next_move;
		}
	})
	
}

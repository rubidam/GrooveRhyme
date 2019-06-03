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

var sf = document.getElementById("fantasy");
var horror = document.getElementById("horror");
var crime = document.getElementById("crime");
var biography = document.getElementById("biography");
var mystery = document.getElementById("mystery");
var art = document.getElementById("artistic");
var comedy = document.getElementById("comedy");
var music = document.getElementById("music");
var drama = document.getElementById("drama");
var docu = document.getElementById("documentary");
var action = document.getElementById("action");
var romance = document.getElementById("romance");
var next_move = "../DPsearch2.html?"

var category = [];

function sflistener(){
	var click = 0;
	sf.addEventListener('mouseover', function (e) {
        sf.style.backgroundImage = "url('SF_hover.png')";
	});
	sf.addEventListener('mouseout', function (e) {
		sf.style.backgroundImage = "url('SF.png')";
	});
	sf.addEventListener('click',function(e){
		if (click == 0){
			click = click + 1;
			category = category + "SF Fantasy";
			next_move = next_move + "category=SF";
			pushCategory(category);
		}
	});
}

function horrorlistener(){
	var click = 0;
	horror.addEventListener('mouseover', function (e) {
		horror.style.backgroundImage = "url('horror_hover.png')";
	});
	horror.addEventListener('mouseout', function (e) {
		horror.style.backgroundImage = "url('horror.png')";
	});
	horror.addEventListener('click',function(e){
		if (click == 0){
			click = click + 1;
			category = category + "Horror";
			next_move = next_move + "category=HORROR";
			pushCategory(category);
		}
	});
}

function crimelistener(){
	var click = 0;
	crime.addEventListener('mouseover', function (e) {
		crime.style.backgroundImage = "url('crime_hover.png')";
	});
	crime.addEventListener('mouseout', function (e) {
		crime.style.backgroundImage = "url('crime.png')";
	});
	crime.addEventListener('click',function(e){
		if (click == 0){
			click = click + 1;
			category = category + "Crime Noir";
			next_move = next_move + "category=CRIME";
			pushCategory(category);
		}
	});
}

function biographylistener(){
	var click = 0;
	biography.addEventListener('mouseover', function (e) {
		biography.style.backgroundImage = "url('biography_hover.png')";
	});
	biography.addEventListener('mouseout', function (e) {
		biography.style.backgroundImage = "url('biography.png')";
	});
	biography.addEventListener('click',function(e){
		if (click == 0){
			click = click + 1;
			category = category + "Biography";
			next_move = next_move + "category=BIOGRAPHY";
			pushCategory(category);
		}
	});

}

function mysterylistener(){
	var click = 0;
	mystery.addEventListener('mouseover', function (e) {
		mystery.style.backgroundImage = "url('mystery_hover.png')";
	});
	mystery.addEventListener('mouseout', function (e) {
		mystery.style.backgroundImage = "url('mystery.png')";
	});
	mystery.addEventListener('click',function(e){
		if (click == 0){
			click = click + 1;
			category = category + "Mystery";
			next_move = next_move + "category=MYSTERY";
			pushCategory(category);
		}
	});

}

function artlistener(){
	var click = 0;
	art.addEventListener('mouseover', function (e) {
		art.style.backgroundImage = "url('artistic_hover.png')";
	});
	art.addEventListener('mouseout', function (e) {
		art.style.backgroundImage = "url('artistic.png')";
	});
	art.addEventListener('click',function(e){
		if (click ==  0){
			click = click + 1;
			category = category + "Artistic";
			next_move = next_move + "category=ARTISTIC";
			pushCategory(category);
		}
	});
}

	
function comedylistener(){
	var click = 0;
	comedy.addEventListener('mouseover', function (e) {
		comedy.style.backgroundImage = "url('comedy_hover.png')";
	});
	comedy.addEventListener('mouseout', function (e) {
		comedy.style.backgroundImage = "url('comedy.png')";
	});
	comedy.addEventListener('click',function(e){
		if (click == 0){
			click = click + 1;
			category = category + "Comedy";
			next_move = next_move + "category=COMEDY";
			pushCategory(category);
		}
	});
}


function musiclistener(){
	var click = 0;
	music.addEventListener('mouseover', function (e) {
		music.style.backgroundImage = "url('music_hover.png')";
	});
	music.addEventListener('mouseout', function (e) {
		music.style.backgroundImage = "url('music.png')";
	});
	music.addEventListener('click',function(e){
		if (click == 0){
			click = click + 1;
			category = category + "Music";
			next_move = next_move + "category=MUSIC";
			pushCategory(category);
		}
	});
}


function dramalistener(){
	var click = 0;
	drama.addEventListener('mouseover', function (e) {
		drama.style.backgroundImage = "url('drama_hover.png')";
	});
	drama.addEventListener('mouseout', function (e) {
		drama.style.backgroundImage = "url('drama.png')";
	});
	drama.addEventListener('click',function(e){
		if (click == 0){
			click = click + 1;
			category = category + "Drama";
			next_move = next_move + "category=DRAMA";
			pushCategory(category);
		}
	});
}


function doculistener(){
	var click = 0;
	docu.addEventListener('mouseover', function (e) {
		docu.style.backgroundImage = "url('docu_hover.png')";
	});
	docu.addEventListener('mouseout', function (e) {
		docu.style.backgroundImage = "url('docu.png')";
	});
	docu.addEventListener('click',function(e){
		if (click == 0){
			click = click + 1;
			category = category + "Documentary";
			next_move = next_move + "category=DOCU";
			pushCategory(category);
		}
	});
}


function actionlistener(){
	var click = 0;
	action.addEventListener('mouseover', function (e) {
		action.style.backgroundImage = "url('action_hover.png')";
	});
	action.addEventListener('mouseout', function (e) {
		action.style.backgroundImage = "url('action.png')";
	});
	action.addEventListener('click',function(e){
		if (click == 0){
			click = click + 1;
			category = category + "Action";
			next_move = next_move + "category=ACTION";
			pushCategory(category);
		}
	});
}


function romancelistener(){
	var click = 0;
	romance.addEventListener('mouseover', function (e) {
		romance.style.backgroundImage = "url('romance_hover.png')";
	});
	romance.addEventListener('mouseout', function (e) {
		romance.style.backgroundImage = "url('romance.png')";
	});
	romance.addEventListener('click',function(e){
		if (click == 0){
			click = click + 1;
			category = category + "Romance";
			next_move = next_move + "category=ROMANCE";
			pushCategory(category);
		}
	});
}

function pushCategory(category){
	firebase.database().ref('/SearchCategory/').once('value',
	function(snapshot){
		firebase.database().ref('/SearchCategory/').set({
			category : category
		});
		readFromDatabase();
	});
	
}

function readFromDatabase(){
	return firebase.database().ref('/SearchCategory/').once('value', 
	function(snapshot){
		var myValue = snapshot.val();
		var keyList = Object.keys(myValue);
		
		var myKey = keyList[0];
		
		location.href = next_move;
	});
}

function bindeventlistener(){
	sflistener();
	horrorlistener();
	crimelistener();
	actionlistener();
	comedylistener();
	dramalistener();
	artlistener();
	mysterylistener();
	biographylistener();
	musiclistener();
	romancelistener();
	doculistener();
}

bindeventlistener();
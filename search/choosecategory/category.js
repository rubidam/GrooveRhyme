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
var next_move = "../DPsearch2.html"

var category = [];

function sflistener(){
	sf.addEventListener('mouseover', function (e) {
		sf.style.backgroundImage = "url('SF_hover.png')";
	});
	sf.addEventListener('mouseout', function (e) {
		sf.style.backgroundImage = "url('SF.png')";
	});
	sf.addEventListener('click',function(e){
		category = category + "SF Fantasy";
		pushCategory(category);
	});
}

function horrorlistener(){
	horror.addEventListener('mouseover', function (e) {
		horror.style.backgroundImage = "url('horror_hover.png')";
	});
	horror.addEventListener('mouseout', function (e) {
		horror.style.backgroundImage = "url('horror.png')";
	});
	horror.addEventListener('click',function(e){
		category = category + "Horror";
		pushCategory(category);
	});
}

function crimelistener(){
	crime.addEventListener('mouseover', function (e) {
		crime.style.backgroundImage = "url('crime_hover.png')";
	});
	crime.addEventListener('mouseout', function (e) {
		crime.style.backgroundImage = "url('crime.png')";
	});
	crime.addEventListener('click',function(e){
		category = category + "Crime Noir";
		pushCategory(category);
	});
}

function biographylistener(){
	biography.addEventListener('mouseover', function (e) {
		biography.style.backgroundImage = "url('bio_hover.png')";
	});
	biography.addEventListener('mouseout', function (e) {
		biography.style.backgroundImage = "url('bio.png')";
	});
	biography.addEventListener('click',function(e){
		category = category + "Biography";
		pushCategory(category);
	});

}

function mysterylistener(){
	mystery.addEventListener('mouseover', function (e) {
		mystery.style.backgroundImage = "url('mystery_hover.png')";
	});
	mystery.addEventListener('mouseout', function (e) {
		mystery.style.backgroundImage = "url('mystery.png')";
	});
	mystery.addEventListener('click',function(e){
		category = category + "Mystery";
		pushCategory(category);
	});

}

function artlistener(){
	art.addEventListener('mouseover', function (e) {
		art.style.backgroundImage = "url('art_hover.png')";
	});
	art.addEventListener('mouseout', function (e) {
		art.style.backgroundImage = "url('art.png')";
	});
	art.addEventListener('click',function(e){
		category = category + "Artistic";
		pushCategory(category);
	});
}

	
function comedylistener(){
	comedy.addEventListener('mouseover', function (e) {
		comedy.style.backgroundImage = "url('comedy_hover.png')";
	});
	comedy.addEventListener('mouseout', function (e) {
		comedy.style.backgroundImage = "url('comedy.png')";
	});
	comedy.addEventListener('click',function(e){
		category = category + "Comedy";
		pushCategory(category);
	});
}


function musiclistener(){
	music.addEventListener('mouseover', function (e) {
		music.style.backgroundImage = "url('music_hover.png')";
	});
	music.addEventListener('mouseout', function (e) {
		music.style.backgroundImage = "url('music.png')";
	});
	music.addEventListener('click',function(e){
		category = category + "Music";
		pushCategory(category);
	});
}


function dramalistener(){
	drama.addEventListener('mouseover', function (e) {
		drama.style.backgroundImage = "url('drama_hover.png')";
	});
	drama.addEventListener('mouseout', function (e) {
		drama.style.backgroundImage = "url('drama.png')";
	});
	drama.addEventListener('click',function(e){
		category = category + "Drama";
		pushCategory(category);
	});
}


function doculistener(){
	docu.addEventListener('mouseover', function (e) {
		docu.style.backgroundImage = "url('docu_hover.png')";
	});
	docu.addEventListener('mouseout', function (e) {
		docu.style.backgroundImage = "url('docu.png')";
	});
	docu.addEventListener('click',function(e){
		category = category + "Documentary";
		pushCategory(category);
	});
}


function actionlistener(){
	action.addEventListener('mouseover', function (e) {
		action.style.backgroundImage = "url('action_hover.png')";
	});
	action.addEventListener('mouseout', function (e) {
		action.style.backgroundImage = "url('action.png')";
	});
	action.addEventListener('click',function(e){
		category = category + "Action";
		pushCategory(category);
	});
}


function romancelistener(){
	romance.addEventListener('mouseover', function (e) {
		romance.style.backgroundImage = "url('romance_hover.png')";
	});
	romance.addEventListener('mouseout', function (e) {
		romance.style.backgroundImage = "url('romance.png')";
	});
	romance.addEventListener('click',function(e){
		category = category + "Romance";
		pushCategory(category);
	});
}

function pushCategory(category){
	var newKey = firebase.database().ref('/SearchCategory/').push();
	newKey.set({
		category : category
	});
	
	readFromDatabase();
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
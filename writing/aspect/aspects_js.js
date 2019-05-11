// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

var production = document.getElementById("Production");
var acting = document.getElementById("Acting");
var synopsis = document.getElementById("Synopsis");
var music = document.getElementById("Music");
var visual = document.getElementById("Visual");
var back = document.getElementById("backspace");
var okbtn = document.getElementById("ok");
var Pon = 0;
var Aon = 0;
var Son = 0;
var Mon = 0;
var Von = 0;
var currenturl = document.location.href;
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
	moviename = moviename.slice(5);
	tempname = "";
	while(moviename != tempname) {
		tempname = moviename;
		moviename = tempname.replace("%20"," ");
		
	}
	console.log(moviename);
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
	okbtn.onclick = function(){
		var updateUserReview = firebase.database().ref("/review_temp/").once('value',function(snapshot){
			var data = snapshot.val();
			var keys = Object.keys(data);
			console.log(keys);
			firebase.database().ref("/UserProfile/MyReview/").once('value',function(snapshot){
				var reviewlist = snapshot.val();
				var movienames = Object.keys(reviewlist);
				if(movienames.includes(keys[0])){
					firebase.database().ref("/UserProfile/MyReview/"+keys[0] + "/").remove();
				}
				firebase.database().ref("/review_temp/" + keys[0] + "/").once('value',function(snapshot){
					var content = snapshot.val();
					console.log(content);
					firebase.database().ref("/UserProfile/MyReview/" + keys[0] + '/').set(content);
					firebase.database().ref("/review_temp/").remove();
					location.href = "../../profile/profilePage.html";
					
				})
			});
		});
	}
}
/*
function makeTempDB(moviename){
	var initaspect = {
						Rating:0, 
						Review : ""
						};

	var temp = firebase.database().ref('/review_temp/'+moviename);
	var pushaspect = temp.push();
	pushaspect.set({"moviename" : moviename,
					"production" : initaspect,
					"acting" : initaspect,
					"synopsis" : initaspect,
					"visual" : initaspect,
					"music" : initaspect
	});
	
	temp.set({		"Production" : initaspect,
					"Acting" : initaspect,
					"Synopsis" : initaspect,
					"Visual" : initaspect,
					"Music" : initaspect
	});
}*/
function judge_db(){
	var this_db = firebase.database().ref('/review_temp/').once('value',function(snapshot){
		var data = snapshot.val();
		console.log(data);
		if (data == null) makeTempDB(parse_url());
		return;
	});
}
function checkreview(){
	var dbsearch = firebase.database().ref('/review_temp/'+parse_url() + '/').once('value',function(snapshot){
		var data = snapshot.val();
		if (data != null){
			var key = Object.keys(data);
			var value = data[key[0]];
			console.log("checkreview");
			console.log(key);
			console.log(value);
			for (var i = 0; i<= 4; i++){
				if(data[key[i]] === 'string'){}
				else {
					var temp = data[key[i]];
					if (temp["Rating"] != 0 || temp["Review"] != ""){
						okbtn.disabled = false;
						if(key[i] == "Acting"){acting.style.backgroundColor = "darkturquoise"}
						else if(key[i] == "Music"){music.style.backgroundColor = "darkturquoise"}
						else if(key[i] == "Synopsis"){synopsis.style.backgroundColor = "darkturquoise"}
						else if(key[i] == "Production"){production.style.backgroundColor = "darkturquoise"}
						else if(key[i] == "Visual"){visual.style.backgroundColor = "darkturquoise"}
					}
				}
			}
		}
		console.log(data);
		
	});
}

judge_db();
bindeventlistener();
checkreview();


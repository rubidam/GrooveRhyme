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

var main = "../main.html";

function extractquery(loc){
	var query = ""
	var queryflag = 0;
	for (var i= 0; i< loc.length; i++){
		if(queryflag == 1){
			query = query + loc[i];
		}
		if (loc[i] == '?') queryflag = 1;
	}
	return query;
}

function aspectPressListener(){
	var nextloc = "./searchaspect/searchaspect.html?"
	var loc = document.location.href;
	var query = extractquery(loc);
	nextloc = nextloc + query;
	location.href = nextloc;
}

function skipPressListener() {
    okPressListener();
}
function okPressListener(){
	var nextloc = "./selectMovie.html?"
	var loc = document.location.href;
	var query = extractquery(loc);
    nextloc = nextloc + query;
    console.log(query);
	location.href = nextloc;
}

function apply() {
    var loc = document.location.href;
    var query = extractquery(loc);
    var splitquery;
    var category = document.getElementById("skip");
	var okbtn = document.getElementById("ok");
	var categoryImg = document.getElementById("categoryImg");
	
    if (query != "") {
        splitquery = query.split("=")[1].split("&")[0].toUpperCase();
        console.log("splitquery1 : " + splitquery);
        if (splitquery == "1") {
            splitquery = "NONE";
        }
        category.value = splitquery;
		
		if (splitquery == "SF"){
			categoryImg.src = "../search/choosecategory/" + splitquery + "_hover.png";
		}
		else{
			categoryImg.src = "../search/choosecategory/" + splitquery.toLowerCase() + "_hover.png";
		}
    }
    else {
        splitquery = "NONE";
        category.value = splitquery;
		okbtn.disabled = true;
    }

    
    if (category.value == "NONE" || category.value == "") {
        var skip = document.getElementById("aspeskip");
        skip.disabled = true;
    }
	
	var deleteButton = document.getElementById("backspace");
	var homeButton = document.getElementById("homeButton");
	
	deleteButton.onclick = function(){
		deleteFromDatabase();
	}
	homeButton.onclick = function(){
		deleteFromDatabase();
	}
}

function deleteFromDatabase(){
	return firebase.database().ref('/SearchCategory/').once('value', 
	function(snapshot){
		var myValue = snapshot.val();
		var keyList = Object.keys(myValue);
		var myKey = keyList[0];
		firebase.database().ref('/SearchCategory/').child(myKey).remove();
		location.href = main;
		
	});
}
var back = document.getElementById("backspace").addEventListener("click", function () {
    console.log("backback");
    location.href = "./DPsearch1.html";
})
apply();

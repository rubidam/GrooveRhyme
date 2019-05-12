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

var movieList = [];

var categorySelected = [];
var aspectSelected = [];
var starRating = [];

var firstidx = 0;
var secondidx = 0;
var collectionnames = [];

function readFromDatabase(){
	return firebase.database().ref('/MovieList/').once('value', 
	function(snapshot){
		var myValue = snapshot.val();
		var keyList = Object.keys(myValue);
		
		for(var i = 0 ; i < keyList.length ; i++){
			var myKey = keyList[i];
			var category = Object.keys(myValue[myKey].Category);
			//console.log(category);
			var rating = myValue[myKey].Rating;
			//console.log(rating);
			var aspect = Object.keys(rating);
			//console.log(aspect);
			
			for (var j = 0 ; j < category.length ; j++){
				if (category[j] == categorySelected[0]){
					movieList.push(myKey);
					starRating.push({"movie" : myKey, "Acting" : rating[aspect[0]], "Music" : rating[aspect[1]], "Production" : rating[aspect[2]], "Synopsis" : rating[aspect[3]], "Visual" : rating[aspect[4]]});
				}
			}
		}
		console.log(movieList);
		printMovie();
	});
}

function getCategory(){
	return firebase.database().ref('/SearchCategory/').once('value', 
	function(snapshot){
		var myValue = snapshot.val();
		var keyList = Object.keys(myValue);
		var myKey = keyList[0];
		categorySelected.push(myValue[myKey]);
		console.log(categorySelected);
	});
}

function getAspect(){
	return firebase.database().ref('/SearchAspect/').once('value',
	function(snapshot){
		var myValue = snapshot.val();
		var keyList = Object.keys(myValue);
		
		for (var i = 0 ; i < keyList.length ; i++){
			var myKey = keyList[i];
			//console.log(myKey);
			//console.log(myValue[myKey]);
			if (myValue[myKey] == 1){
				aspectSelected.push(myKey);
				console.log(aspectSelected);
			}
		}
	});
}

function sortByRating(){
	var sortedMovie = [];
	for (var i = 0 ; i < starRating.length ; i++){
		for (var j = i ; j > 0 ; j--){
			if (starRating[j-1][aspectSelected] < starRating[j][aspectSelected]){
				var temp = starRating[j];
				starRating[j] = starRating[j-1];
				starRating[j-1] = temp;
			}
		}  
	}
	for (var k = 0 ; k < starRating.length ; k++){
		sortedMovie[k] = starRating[k]["movie"]; 
	}
	console.log(sortedMovie);
	return sortedMovie;
}

function deleteFromDatabase(){
	return firebase.database().ref('/SearchCategory/').once('value', 
	function(snapshot){
		var myValue = snapshot.val();
		var keyList = Object.keys(myValue);
		var myKey = keyList[0];
		firebase.database().ref('/SearchCategory/').child(myKey).remove();
		firebase.database().ref('/').child("SearchAspect").remove();
	});
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createMovieName(value) {
	var movieNameElement = value.split(":");

	var moviePicture = "";
	for (var i = 0 ; i < movieNameElement.length ; i++){
		if (i > 0){
			moviePicture = moviePicture + movieNameElement[i];
		}
		else{
			moviePicture = moviePicture + movieNameElement[i];
		}
	}
	
	return moviePicture;
}

function printMovie(){
	var first = document.getElementById("firstMovie");
	var second = document.getElementById("secondMovie");
	
	var sortedList = sortByRating();
	
	var firstIndex = getRandomInt(0, movieList.length - 1);
	
	if (firstIndex + 1 < movieList.length - 1){
		var secondIndex = firstIndex + 1;
	}
	else{
		var secondIndex = firstIndex - 1;
	}
	
	firstidx = firstIndex;
	secondidx = secondIndex;
	
    var getstorageFirst = firebase.storage().ref().child(createMovieName(movieList[firstIndex]) + ".jpg").getDownloadURL().then(function (url) {
        console.log("create : " + createMovieName(movieList[firstIndex]));
		console.log(url);
		first.src = url;
	});
	
	var getstorageSecond = firebase.storage().ref().child(createMovieName(movieList[secondIndex]) + ".jpg").getDownloadURL().then(function(url){
		console.log(url);
		second.src = url;
	});
	
	
    refreshButton.onclick = function () {
        var refreshButton = document.getElementById("refreshButton");
        var newfirstIndex = getRandomInt(0, movieList.length - 1);
        var newsecondIndex;
		if (newfirstIndex + 1 < movieList.length - 1){
			newsecondIndex = newfirstIndex + 1;
		}
		else{
			newsecondIndex = newfirstIndex - 1;
		}
        var getstorageFirstNew = firebase.storage().ref().child(createMovieName(movieList[newfirstIndex]) + ".jpg").getDownloadURL().then(function (url) {
            console.log("create : " + createMovieName(movieList[firstIndex]));

			console.log(url);
			first.src = url;
		});
		
		var getstorageSecondNew = firebase.storage().ref().child(createMovieName(movieList[newsecondIndex]) + ".jpg").getDownloadURL().then(function(url){
			console.log(url);
			second.src = url;
        });
        firstIndex = newfirstIndex;
        secondIndex = newsecondIndex;
    }
    var nextMove = "./movieReview.html";
    first.onclick = function () {
        console.log("first's clicked");
        nextMove = nextMove + "?" + movieList[firstIndex];
        location.href = nextMove;
    }
    second.onclick = function () {
        console.log("second's clicked");
        nextMove = nextMove + "?" + movieList[secondIndex];
        location.href = nextMove;

    }
}


function closeForm(){
	var popup = document.getElementById("collection");
	var table = document.getElementById("collectionList");
	for (var i = 1; i<= collectionnames.length; i++){
		console.log(collectionnames[i]);
		table.deleteRow(1);
	}
	popup.style.display = "none";
	
}

function clickcollection(collectionbutton,idx){
	console.log(collectionnames[idx]);
	var buttonid = collectionbutton.id;
	var update = firebase.database().ref('/UserProfile/MyCollection/' + collectionnames[idx]);
	if (buttonid === "firstPlusButton"){
		var entry ={};
		entry[movieList[firstidx]] = 1;
		console.log(entry);
		update.update(entry);
	}
	else if(buttonid === "secondPlusButton"){
		var entry = {};
		entry[movieList[secondidx]] = 1;
		console.log(entry);
		update.update(entry);
	}
	else{
		console.log("---------------errorerror-----------------");
	}
}

function showcollectionlist(collectionbutton){
	document.getElementById("collection").style.display = "block";
	
	var ctable = document.getElementById("collectionList");
	document.getElementById("collection").style.display = "block";
	var collection = firebase.database().ref('/UserProfile/MyCollection').once('value',function(snapshot){
		var list = snapshot.val();
		var keys = Object.keys(list);
		collectionnames = keys;
		console.log(keys);
		for (var k = 1; k <= keys.length; k++){
			var row = ctable.insertRow(k);
			var cell = row.insertCell(0);
			cell.innerHTML = keys[k-1];
			var temp = k;
			row.addEventListener('click',clickcollection.bind(this,collectionbutton,k));
		}
	});
}



function bindevent(){
	var backbutton = document.getElementById("backbutton");
	var homebutton = document.getElementById("homeButton");
	var firstbtn = document.getElementById("firstPlusButton");
	var secondbtn = document.getElementById("secondPlusButton");
	backbutton.onclick = function(){
		var value = deleteFromDatabase();
		value.then(
			function(value){
				location.href = "./DPsearch1.html";
			},
			function(reason){
				console.log("failed because of....");
				console.log(reason);
			}
		)
	};
	homebutton.onclick = function(){
		var value = deleteFromDatabase();
		value.then(
			function(value){
				location.href = "../main.html";
			},
			function(reason){
				console.log("failed because of....");
				console.log(reason);
			}
		)
	};
	firstbtn.onclick = function(){
		console.log("first");
		showcollectionlist(firstbtn);
	};
	secondbtn.onclick = function(){
		console.log("second");
		showcollectionlist(secondbtn);
	}
}

getCategory();
getAspect();
readFromDatabase();
bindevent();
//deleteFromDatabase();
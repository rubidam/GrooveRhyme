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

function readFromDatabase(){
	return firebase.database().ref('/MovieList/').once('value', 
	function(snapshot){
		var myValue = snapshot.val();
		var keyList = Object.keys(myValue);
		
		for(var i = 0 ; i < keyList.length - 1 ; i++){
			var myKey = keyList[i];
			var category = Object.keys(myValue[myKey].Category);
			//console.log(category);
			
			for (var j = 0 ; j < category.length ; j++){
				if (category[j] == categorySelected[0]){
					movieList.push(myKey);
				}
			}
		}
		//console.log(movieList);
		printMovie();
	});
}

function getCategory(){
	return firebase.database().ref('/SearchCategory/').once('value', 
	function(snapshot){
		var myValue = snapshot.val();
		var keyList = Object.keys(myValue);
		var myKey = keyList[0];
		categorySelected.push(myValue[myKey].category);
	});
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
	
	var firstIndex = getRandomInt(0, movieList.length - 1);
	
	if (firstIndex + 1 < movieList.length - 1){
		var secondIndex = firstIndex + 1;
	}
	else{
		var secondIndex = firstIndex - 1;
	}

    var getstorageFirst = firebase.storage().ref().child(createMovieName(movieList[firstIndex]) + ".jpg").getDownloadURL().then(function (url) {
        console.log("create : " + createMovieName(movieList[firstIndex]));
		console.log(url);
		first.src = url;
	});
	
	var getstorageSecond = firebase.storage().ref().child(createMovieName(movieList[secondIndex]) + ".jpg").getDownloadURL().then(function(url){
		console.log(url);
		second.src = url;
	});
	
	var refreshButton = document.getElementById("refreshButton");
    var newfirstIndex = getRandomInt(0, movieList.length - 1);
    var newsecondIndex;
    refreshButton.onclick = function () {
	
		if (newfirstIndex + 1 < movieList.length - 1){
			newsecondIndex = newfirstIndex + 1;
		}
		else{
			newsecondIndex = newfirstIndex - 1;
		}
		var getstorageFirstNew = firebase.storage().ref().child(createMovieName(movieList[newfirstIndex]) + ".jpg").getDownloadURL().then(function(url){
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
        nextMove = nextMove + "?" + createMovieName(movieList[firstIndex]);
        location.href = nextMove;
    }
    second.onclick = function () {
        console.log("second's clicked");
        nextMove = nextMove + "?" + createMovieName(movieList[secondIndex]);
        location.href = nextMove;

    }
}

function collection_click(){
	
}

function showcollectionlist(){
	var ctable = document.getElementById("collectionList");
	var collection = firebase.database().ref('/UserProfile/MyCollection').once('value',function(snapshot){
		var list = snapshot.val()
		var keys = Object.keys(list);
		for (var i = 1; i< keys.length; i++){
			var row = ctable.insertRow(i);
			var cell = row.insertCell(0);
			cell.innerHTML = keys[i];
			cell.addEventListener('click',function(event){
				var 
			});
		}
	});
}



function bindevent(){
	var backbutton = document.getElementById("backbutton");
	var homebutton = document.getElementById("homeButton");
	
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
		//location.href = 
	};
}

getCategory();
readFromDatabase();
bindevent();
showcollectionlist();
//deleteFromDatabase();
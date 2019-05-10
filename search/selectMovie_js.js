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
				if (category[j] == "Romance"){
					movieList.push(myKey);
				}
			}
		}
		//console.log(movieList);
		printMovie();
	});
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

	var getstorageFirst = firebase.storage().ref().child(movieList[firstIndex] + ".jpg").getDownloadURL().then(function(url){
		console.log(url);
		first.src = url;
	});
	
	var getstorageSecond = firebase.storage().ref().child(movieList[secondIndex] + ".jpg").getDownloadURL().then(function(url){
		console.log(url);
		second.src = url;
	});
	
	var refreshButton = document.getElementById("refreshButton");
	
	refreshButton.onclick = function(){
		var newfirstIndex = getRandomInt(0, movieList.length - 1);
	
		if (newfirstIndex + 1 < movieList.length - 1){
			var newsecondIndex = newfirstIndex + 1;
		}
		else{
			var newsecondIndex = newfirstIndex - 1;
		}
		var getstorageFirstNew = firebase.storage().ref().child(movieList[newfirstIndex] + ".jpg").getDownloadURL().then(function(url){
			console.log(url);
			first.src = url;
		});
		
		var getstorageSecondNew = firebase.storage().ref().child(movieList[newsecondIndex] + ".jpg").getDownloadURL().then(function(url){
			console.log(url);
			second.src = url;
		});
	}
}

readFromDatabase();
// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDDFiULsphXfbs8XMTaJr4o4dxCPvCyX8w",
	authDomain: "movielist-454ba.firebaseapp.com",
	databaseURL: "https://movielist-454ba.firebaseio.com",
	projectId: "movielist-454ba",
	storageBucket: "movielist-454ba.appspot.com",
	messagingSenderId: "444347257371",
	appId: "1:444347257371:web:9b97aad58b2e7f75"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function copy_review(name) {
	return firebase.database().ref('/MyReview/' + name).once('value', function(snapshot) {
		var v = snapshot.val();
		//console.log(v);
		var newlog = firebase.database().ref('/review_temp/' + name);
		newlog.set(v);
	});
}
/*********************review part**********************************/
function initializereviewTable() {
  /*
    Initialize the courses in the right plane
  */
  var myTable = document.getElementById("reviewTable");
  var numRows = myTable.rows.length;
  for(var i=1;i<numRows;i++){
    myTable.deleteRow(1);
  }
  myTable.insertRow(1);
}
function refreshreviewList(name) {
	console.log(name)
	/* parsing movie name */
	var movieNameElement = name.split(":");
	var moviePicture = "";
	for (var i = 0 ; i < movieNameElement.length ; i++){
		moviePicture = moviePicture + movieNameElement[i];
	}
	/* parsing movie name */
	console.log(moviePicture);
	var resultTable = document.getElementById("reviewTable");
	var row = resultTable.rows[maxreviewrow];
	
	var col1 = row.insertCell(row.cells.length);
	col1.addEventListener("click",function(e){
		console.log(name);
		copy_review(name);
		location.href = "../writing/aspect/aspects.html?name=" + name;
	})
	var getstorage = firebase.storage().ref().child(moviePicture + ".jpg").getDownloadURL().then(function(url){
		console.log(url);
		col1.innerHTML = "<img src =" + url + " height = 200 width = 130 hspace = 7>";
    });
	
	if(row.cells.length == 4){
		maxreviewrow +=1;
		resultTable.insertRow(maxreviewrow);
	}
	
}
function makereviewTable(lst) {
	initializereviewTable();
	var len = lst.length;
	for (var i=0;i<len;i++) {
		refreshreviewList(lst[i]);
	}
}

function getReviewList() {
	return firebase.database().ref('/UserProfile/MyReview/').once('value', function(snapshot){
		var myValue = snapshot.val();
		if (myValue != null) {
			var keys = Object.keys(myValue);
			reviewlist = keys;
			console.log(reviewlist);
		}
		makereviewTable(reviewlist);
	});
}
/*********************review part**********************************/
/*****************collection part**********************************/
function initializecollectionTable() {
  /*
    Initialize the courses in the right plane
  */
  var myTable = document.getElementById("collectionTable");
  var numRows = myTable.rows.length;
  for(var i=1;i<numRows;i++){
    myTable.deleteRow(1);
  }
}
function refreshcollectionList(name) {
	var resultTable = document.getElementById("collectionTable");
	var row = resultTable.insertRow(1);
	var col1 = row.insertCell(0);
	col1.setAttribute('class','collection_td');
	var col2 = row.insertCell(1);
	col2.setAttribute('class','collection_td');
	col1.addEventListener("click",function(e){
		console.log(name);
		location.href = "./collection.html?collection=" + name;
	})
	col2.addEventListener("click",function(e){
		console.log(name);
		location.href = "./collection.html?collection=" + name;
	})
	col1.innerHTML = name;
	col2.innerHTML = ">";
}
function makecollectionTable(lst) {
	initializecollectionTable();
	var len = lst.length;
	for (var i=len-1;i>=0;i--) {
		refreshcollectionList(lst[i]);
	}
}

function getCollectionList() {
	return firebase.database().ref('/UserProfile/MyCollection/').once('value', function(snapshot){
		var myValue = snapshot.val();
		if (myValue != null) {
			var keys = Object.keys(myValue);
			collectionlist = keys;
			console.log(collectionlist);
		}
		makecollectionTable(collectionlist);
	});
}
/*****************collection part**********************************/
var reviewlist=[];
var maxreviewrow = 1;
getReviewList();
var collectionlist=[];
getCollectionList();
